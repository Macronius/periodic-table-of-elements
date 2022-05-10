import React, { createContext, useState } from 'react';

// CONTEXT
export const DisplayModeContext = createContext(
    {
        displayMode: null,
        setDisplayMode: () => null,
    }
);


// PROVIDER
export const DisplayModeProvider = ({children}) => {

    const [displayMode, setDisplayMode] = useState(null);
    const value = {displayMode, setDisplayMode};

    return (
        <DisplayModeContext.Provider
            value={value}
        >
            {children}
        </DisplayModeContext.Provider>
    )
}