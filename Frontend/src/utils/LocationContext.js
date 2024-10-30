import React, { createContext, useState } from 'react';

// Creating a context for managing location data
const LocationContext = createContext();

// LocationProvider component to provide location data to its children
export const LocationProvider = ({ children }) => {
  // State to store latitude and longitude
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  // Function to update location
  const updateLocation = (latitude, longitude) => {
    setLocation({ latitude, longitude }); // Updating location state with new latitude and longitude
  };

  // Providing location data to children components through context
  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children} {/* Rendering children components */}
    </LocationContext.Provider>
  );
};

// Exporting LocationContext
export default LocationContext;
