import React, { createContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const updateLocation = (latitude, longitude) => {
    setLocation({ latitude, longitude });
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;