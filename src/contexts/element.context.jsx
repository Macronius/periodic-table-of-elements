import React, { createContext, useState } from 'react';


// CONTEXT
export const ElementContext = createContext(
  {
    element: null,
    setElement: () => null,
  }
);


// PROVIDER
export const ElementProvider = ({children}) => {

  const [element, setElement] = useState(null);

  const value = {element, setElement};

  return (
    <ElementContext.Provider
      value={value}
    >
      {children}
    </ElementContext.Provider>
  )
};