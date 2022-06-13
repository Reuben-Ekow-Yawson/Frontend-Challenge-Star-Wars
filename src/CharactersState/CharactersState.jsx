import React, { createContext, useContext, useState } from "react";

const Info = createContext();

const CharactersState = ({ children }) => {
  const [cast, setCast] = useState();
  return (
  <Info.Provider 
    value={{ cast, setCast }}>
      {children}
  </Info.Provider>)
};

export const CastState = () => {
  return useContext(Info);
};

export default CharactersState;
