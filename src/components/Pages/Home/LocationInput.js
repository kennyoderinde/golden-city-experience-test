import React, { useState } from "react";

const LocationInput = () => {
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the location value, e.g., send it to a backend server, perform a search, etc.
    console.log("Location entered:", location);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="locationInput"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter Location"
        required
        className=" w-438px h-auto bg-[#F4F4F4] rounded-2xl mt-6 px-2 py-2.5 font-poppins outline-none" style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)' }}
      />
      <button type="submit"></button>
    </form>
  );
};

export default LocationInput;
