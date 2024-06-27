// components/Map.js
"use client";
import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ";

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(115.8613);
  const [lat, setLat] = useState(-31.9523);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/tarun2506/clh7pxozd00ux01pg48yldm1g",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.scrollZoom.disable();
    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");

    map.current.on('load', () => {
      getRouteLine(props);
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(5));
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    getRouteLine(props);
  }, [props]);

  const getRouteLine = async (routeProps) => {
    let query;
    if (!routeProps.stop.latitude || !routeProps.stop.longitude) {
      query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${routeProps.start.longitude},${routeProps.start.latitude};${routeProps.end.longitude},${routeProps.end.latitude}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
    } else {
      query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${routeProps.start.longitude},${routeProps.start.latitude};${routeProps.stop.longitude},${routeProps.stop.latitude};${routeProps.end.longitude},${routeProps.end.latitude}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
    }

    const json = await query.json();
    if (!json.routes || json.routes.length === 0) {
      return;
    }

    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    } else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };

  return (
    <div ref={mapContainer} className="absolute top-0 left-0 w-full h-[580px]" />
  );
};

export default Map;
