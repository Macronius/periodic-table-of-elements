import React, { createContext, useState } from 'react';

/* D I S P L A Y   M O D E */
// CONTEXT
export const DisplayModeContext = createContext(
    {
        displayMode: null,
        setDisplayMode: () => null,
    }
);

// PROVIDER
export const DisplayModeProvider = ({children}) => {

    // const [displayMode, setDisplayMode] = useState("categories");
    const [displayMode, setDisplayMode] = useState("categories");
    const value = {displayMode, setDisplayMode};

    return (
        <DisplayModeContext.Provider
            value={value}
        >
            {children}
        </DisplayModeContext.Provider>
    )
}


