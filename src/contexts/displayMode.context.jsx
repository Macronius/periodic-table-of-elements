import React, { createContext, useState } from 'react';

/* D I S P L A Y   M O D E */
export const DisplayModeContext = createContext(
    {
        displayMode: null,
        setDisplayMode: () => null,
    }
);

export const DisplayModeProvider = ({children}) => {

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


