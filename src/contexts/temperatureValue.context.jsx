import React, { createContext, useState } from 'react';

/* T E M P E R A T U R E   V A L U E  */
// CONTEXT
export const TemperatureValueContext = createContext(
    {
        temperatureValue: null,
        setTemperatureValue: () => null,
    }
);

// PROVIDER
export const TemperatureValueProvider = ({children}) => {

    const [temperatureValue, setTemperatureValue] = useState(299);
    const value = {temperatureValue, setTemperatureValue};

    return (
        <TemperatureValueContext.Provider
            value={value}
        >
            {children}
        </TemperatureValueContext.Provider>
    )
}