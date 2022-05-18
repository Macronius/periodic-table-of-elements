import React, { createContext, useState } from 'react';

import data from '../data/PeriodicTableJSON.json';



export const ElementContext = createContext(
  {
    element: null,
    setElement: () => null,
  }
);

export const ElementProvider = ({children}) => {

  const [element, setElement] = useState(data["elements"][0]);

  const value = {element, setElement};

  return (
    <ElementContext.Provider
      value={value}
    >
      {children}
    </ElementContext.Provider>
  )
};