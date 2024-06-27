"use client";
import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import useStore from "../../lib/store/store";

mapboxgl.accessToken = "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ";

function HomeScreen({ setComponent }) {
  const setPickup = useStore((state) => state.setPickup);
  const setDestination = useStore((state) => state.setDestination);
  const setStop = useStore((state) => state.setStop);
  const setDate = useStore((state) => state.setDate);
  const setTime = useStore((state) => state.setTime);
  const setVehicle = useStore((state) => state.setVehicle);
  const setNote = useStore((state) => state.setNote);
  const setDistances = useStore((state) => state.setDistances);
  const  setServices = useStore((state) => state.setServices);

  const pickup = useStore((state) => state.pickup);
  const destination = useStore((state) => state.destination);
  const stop = useStore((state) => state.stop);
  const date = useStore((state) => state.date);
  const time = useStore((state) => state.time);
  const vehicle = useStore((state) => state.vehicle);
  const note = useStore((state) => state.note);
  const distances = useStore((state) => state.distances);
  const services = useStore((state) => state.services);

  const [pointsSelected, setPointsSelected] = useState({
    start: "",
    stop: "",
    end: "",
  });

  const [startPointData, setStartPointData] = useState([]);
  const [endPointData, setEndPointData] = useState([]);
  const [stopPointData, setStopPointData] = useState([]);

  const [startPointClick, setStartPointClick] = useState(false);
  const [endPointClick, setEndPointClick] = useState(false);
  const [stopPointClick, setStopPointClick] = useState(false);

  const handleStartClick = (address, coords) => {
    setPointsSelected((prev) => ({
      ...prev,
      start: coords,
    }));
    setPickup(address);
    document.getElementById("start").value = address;
    setStartPointClick(false);
    console.log("Pickup set to:", address);
  };

  const handleEndClick = (address, coords) => {
    setPointsSelected((prev) => ({
      ...prev,
      end: coords,
    }));
    setDestination(address);
    document.getElementById("end").value = address;
    setEndPointClick(false);
    console.log("Destination set to:", address);
  };

  const handleStopClick = (address, coords) => {
    setPointsSelected((prev) => ({
      ...prev,
      stop: coords,
    }));
    setStop(address);
    document.getElementById("stop").value = address;
    setStopPointClick(false);
    console.log("Stop set to:", address);
  };

  const handlePointPopperClick = async (point, setter, setPointClick) => {
    if (!point) return;
    const query = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?country=au&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    setter(json.features || []);
    setPointClick(true);
  };

  const availableServices = [
    { id: 1, name: 'Hourly Bookings (Minimum 3 Hours)', price: 10.00 },
    { id: 2, name: 'Add More Vehicles (Book Up To 3 Vans)', price: 10.00 },
    { id: 3, name: 'Return Trip', price: 10.00 },
  ];
  const vehicleTypes = [
    {
      id: 1,
      name: "Small Van",
      capacity: "5 seats",
      price: "$4.50",
      imageUrl: "/path-to-your-image/small-van.png",
    },
    {
      id: 2,
      name: "Large Van",
      capacity: "10 seats",
      price: "$4.50",
      imageUrl: "/path-to-your-image/large-van.png",
    },
    {
      id: 3,
      name: "Bus",
      capacity: "20 seats",
      price: "$4.50",
      imageUrl: "/path-to-your-image/bus.png",
    },
  ];

  const calculateDistance = (coord1, coord2) => {
    if (!coord1 || !coord2) return 0;

    const [lng1, lat1] = coord1;
    const [lng2, lat2] = coord2;

    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance.toFixed(2);
  };

  useEffect(() => {
    let distances = {};
    if (pointsSelected.start && pointsSelected.end) {
      distances.startEndDistance = calculateDistance(
        pointsSelected.start,
        pointsSelected.end
      );
      console.log(
        `Distance between start and end: ${distances.startEndDistance} km`
      );
    }

    if (pointsSelected.start && pointsSelected.stop) {
      distances.startStopDistance = calculateDistance(
        pointsSelected.start,
        pointsSelected.stop
      );
      console.log(
        `Distance between start and stop: ${distances.startStopDistance} km`
      );
    }

    if (pointsSelected.stop && pointsSelected.end) {
      distances.stopEndDistance = calculateDistance(
        pointsSelected.stop,
        pointsSelected.end
      );
      console.log(
        `Distance between stop and end: ${distances.stopEndDistance} km`
      );
    }

    setDistances(distances);
    console.log("Distances set to:", distances);
  }, [pointsSelected, setDistances]);

  const startPointRef = useRef(null);
  const endPointRef = useRef(null);
  const stopPointRef = useRef(null);

  const handleAddStopOpen = () => setAddStop(true);
  const handleAddStopClose = () => {
    setPointsSelected((prev) => ({
      ...prev,
      stop: "",
    }));
    setAddStop(false);
  };

  const [addStop, setAddStop] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleNextClick = () => {
    const pickupValue = document.getElementById("start").value;
    const destinationValue = document.getElementById("end").value;
    const stopValue = document.getElementById("stop") ? document.getElementById("stop").value : "";
    const dateValue = document.getElementById("date").value;
    const timeValue = document.getElementById("time").value;
    const vehicleValue = vehicleTypes.find((v) => v.id === selectedVehicle)?.name || "";
    const noteValue = document.getElementById("note").value;

    setPickup(pickupValue);
    setDestination(destinationValue);
    setStop(stopValue);
    setDate(dateValue);
    setTime(timeValue);
    setVehicle(vehicleValue);
    setNote(noteValue);

    // Verify if the state is updated globally
    const state = useStore.getState();
    console.log("Updated Zustand state:", state);

    setComponent(2);
  };

  return (
    <div className="">
      <div className="p-4 bg-white text-black h-[500px]  overflow-auto">
        <p className="font-bold ">Book A Ride</p>
        <div className="mb-4">
          <label className="block mb-2 text-black">Pickup Point</label>
          <div className="w-full p-2 border border-gray-300 rounded">
            <input
              id="start"
              type="text"
              className="w-full px-2 py-1 text-black bg-white shadow-2xl rounded-3xl"
              onChange={(e) =>
                handlePointPopperClick(
                  e.target.value,
                  setStartPointData,
                  setStartPointClick
                )
              }
              placeholder="Where From?"
            />
            {startPointClick && (
              <div className="absolute z-30 flex-col mt-2 bg-white w-80 popper">
                {startPointData.map((item, index) => (
                  <div
                    key={index}
                    className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
                    onClick={() =>
                      handleStartClick(
                        item.place_name,
                        item.geometry.coordinates
                      )
                    }
                  >
                    <p className="text-black">
                      {item.place_name.length > 40
                        ? `${item.place_name.slice(0, 40)}...`
                        : item.place_name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Destination Point</label>
          <div className="w-full p-2 border border-gray-300 rounded">
            <input
              id="end"
              type="text"
              className="w-full px-2 py-1 text-black bg-white shadow-2xl rounded-3xl"
              onChange={(e) =>
                handlePointPopperClick(
                  e.target.value,
                  setEndPointData,
                  setEndPointClick
                )
              }
              placeholder="Where To?"
            />
            {endPointClick && (
              <div className="absolute z-30 flex-col mt-2 bg-white w-80 popper">
                {endPointData.map((item, index) => (
                  <div
                    key={index}
                    className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
                    onClick={() =>
                      handleEndClick(item.place_name, item.geometry.coordinates)
                    }
                  >
                    <p className="text-black">
                      {item.place_name.length > 40
                        ? `${item.place_name.slice(0, 40)}...`
                        : item.place_name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {addStop && (
          <div className="mb-4">
            <label className="block mb-2 text-black">Stop Point</label>
            <div className="w-full p-2 border border-gray-300 rounded">
              <input
                id="stop"
                type="text"
                className="w-full px-2 py-1 bg-white text-black shadow-2xl rounded-3xl"
                onChange={(e) =>
                  handlePointPopperClick(
                    e.target.value,
                    setStopPointData,
                    setStopPointClick
                  )
                }
                placeholder="Add Stop"
              />
              {stopPointClick && (
                <div className="absolute z-30 flex-col mt-2 bg-white w-80 popper">
                  {stopPointData.map((item, index) => (
                    <div
                      key={index}
                      className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
                      onClick={() =>
                        handleStopClick(item.place_name, item.geometry.coordinates)
                      }
                    >
                      <p className="text-black">
                        {item.place_name.length > 40
                          ? `${item.place_name.slice(0, 40)}...`
                          : item.place_name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {!addStop && (
          <button
            className="px-4 py-2 text-black bg-blue-500 rounded"
            onClick={handleAddStopOpen}
          >
            Add Stop
          </button>
        )}
        {addStop && (
          <button
            className="px-4 py-2 text-white bg-red-500 rounded"
            onClick={handleAddStopClose}
          >
            Remove Stop
          </button>
        )}
        <div className="mb-4">
          <label className="block mb-2 text-black">Select Date & Time</label>
          <div className="flex space-x-4">
            <input
              id="date"
              type="date"
              className="w-full p-2 text-black border border-gray-300 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              id="time"
              type="time"
              className="w-full p-2 text-black border border-gray-300 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Select Vehicle Type</label>
          <div className="flex space-x-4">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`cursor-pointer p-4 border rounded-lg ${
                  selectedVehicle === vehicle.id ? "border-yellow-500" : ""
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="object-cover w-full h-32"
                />
                <div className="mt-2 text-black">
                  <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                  <p className="text-sm text-gray-500">{vehicle.capacity}</p>
                  <p className="text-sm font-bold">{vehicle.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Additional Note</label>
          <input
            id="note"
            type="text"
            className="w-full p-2 text-black border border-gray-300 rounded"
            placeholder="Additional Note"
          />
        </div>
       
      </div>
      <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
    </div>
  );
}

export default HomeScreen;
