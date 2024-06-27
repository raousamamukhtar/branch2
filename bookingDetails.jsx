"use client";
import { useState } from "react";
import useStore from "../../lib/store/store";

const BookingDetails = ({ setComponent }) => {
  const setOccasion = useStore((state) => state.setOccasion);
  const setPassengers = useStore((state) => state.setPassengers);
  const setContact = useStore((state) => state.setContact);
  const setDriverNote = useStore((state) => state.setDriverNote);

  const storeOccasion = useStore((state) => state.occasion);
  const storePassengers = useStore((state) => state.passengers);
  const storeContact = useStore((state) => state.contact);
  const storeDriverNote = useStore((state) => state.driverNote);

  const [occasion, setLocalOccasion] = useState(storeOccasion);
  const [passengers, setLocalPassengers] = useState(storePassengers);
  const [contact, setLocalContact] = useState(storeContact);
  const [driverNote, setLocalDriverNote] = useState(storeDriverNote);

  const handleContactChange = (field, value) => {
    setLocalContact({ ...contact, [field]: value });
  };

  const handleNextClick = () => {
    // Set all the states globally
    setOccasion(occasion);
    setPassengers(passengers);
    setContact(contact);
    setDriverNote(driverNote);

    console.log("Updated Zustand state:", useStore.getState());

    // Navigate to the next component
    setComponent(3);
  };

  return (
    <div className="w-full h-screen flex flex-col p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 overflow-auto flex-1">
        <h1 className="text-3xl font-bold text-center mb-6">Booking Details</h1>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Occasion Type</label>
          <select
            value={occasion}
            onChange={(e) => setLocalOccasion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Occasion</option>
            <option value="airport-transfer">Airport Transfer</option>
            <option value="wedding">Wedding</option>
            <option value="party">Party</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Number of Passengers</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setLocalPassengers(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Contact Details</label>
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => handleContactChange("name", e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Note for Driver</label>
          <textarea
            value={driverNote}
            onChange={(e) => setLocalDriverNote(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
      </div>
      <div className="flex justify-between p-4 bg-white rounded-b-lg shadow-lg">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleNextClick}
        >
          Next
        </button>
        <button
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
          onClick={() => setComponent(1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
