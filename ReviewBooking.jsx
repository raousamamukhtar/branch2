"use client"
import { useEffect } from 'react';
import useStore from '../../lib/store/store';
import { SlLocationPin } from 'react-icons/sl';

const ReviewBooking = ({ setComponent }) => {
  const pickup = useStore((state) => state.pickup);
  const destination = useStore((state) => state.destination);
  const stop = useStore((state) => state.stop);
  const date = useStore((state) => state.date);
  const time = useStore((state) => state.time);
  const vehicle = useStore((state) => state.vehicle);
  const occasion = useStore((state) => state.occasion);
  const passengers = useStore((state) => state.passengers);
  const distances = useStore((state) => state.distances);

  return (
    <div className="p-4 text-black  bg-white">
      <button onClick={() => setComponent(2)} className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h1 className="text-2xl font-bold mb-4">Review Booking</h1>
      <p className="text-gray-600">{new Date(date).toDateString()}</p>
      <p className="text-gray-600">Order#OZ485697</p>

      <div className="my-4">
        <div className="flex items-center mb-2">
          <SlLocationPin className="mr-2 text-yellow-500" />
          <p>{pickup}</p>
        </div>
        <div className="flex items-center mb-2">
          <SlLocationPin className="mr-2 text-yellow-500" />
          <p>{destination}</p>
        </div>
      </div>

      <div className="my-4">
        <div className="flex items-center mb-2">
          <img src={`/path-to-your-image/${vehicle}.png`} alt={vehicle} className="w-16 h-16" />
          <p className="ml-4">{vehicle}</p>
        </div>
      </div>

      <div className="my-4 bg-yellow-300 p-4 flex rounded-md">
       <div> <p className="font-bold">Cancellation policy</p>
        <p className="text-sm text-gray-600">
          Cancellations made seven days or less before a trip are not eligible for a refund
        </p></div>
        <button className="bg-yellow-500  py-1 px-2 rounded mt-2">Details</button>
      </div>

      <div className="my-4">
        <p className="font-bold">Occasion</p>
        <p>{occasion}</p>
      </div>

      <div className="my-4">
        <p className="font-bold">Total Passengers</p>
        <p>{passengers}</p>
      </div>

      <div className="my-4">
        <p className="font-bold">Price Breakdown</p>
        <div>
          <p>Base Fare: $10.00</p>
          {/* <p>Distance Charge: ${distances.distanceStartToEnd || 0}</p> */}
          <p>Time Charge: $22.60</p>
        </div>
      </div>
      <div className="flex space-x-4">
        {/* <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={handleNextClick}
        >
          Next
        </button> */}
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded"
          onClick={() => setComponent(2)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ReviewBooking;
