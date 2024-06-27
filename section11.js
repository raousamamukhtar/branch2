// // components/MainComponent.jsx
"use client";
import { useState } from "react";
import HomeScreen from "./homescreen";
import BookingDetails from "./BookingDetails";
import ReviewBooking from "./ReviewBooking";
import Map from "./map";
import useStore from "../../lib/store/store";

const Section11 = () => {
  const [component, setComponent] = useState(1);
  const state = useStore((state) => state);
  console.log("state", state);
  const pointsSelected = {
    start: { longitude: 115.8613, latitude: -31.9523 },
    stop: { longitude: 0, latitude: 0 },
    end: { longitude: 115.8575, latitude: -31.9505 },
  };

  return (
    <div className="relative h-screen ">
      <Map {...pointsSelected} />
      <div className="absolute left-0 w-[400px] h-[400px]   ">
        <div className="">
          {component === 1 && <HomeScreen setComponent={setComponent} />}
          {component === 2 && <BookingDetails setComponent={setComponent} />}
          {component === 3 && <ReviewBooking setComponent={setComponent} />}
          {/* Add more components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Section11;
