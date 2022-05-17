import React, { createContext, useState } from 'react';


export const DiagramParentMaxDimContext = createContext(
    {
        maxDim: null,
        setMaxDim: () => null,
    }
);


export const DiagramParentMaxDimProvider = ({children}) => {

    const [maxDim, setMaxDim] = useState(500);

    const value = {maxDim, setMaxDim};

    return (
        <DiagramParentMaxDimContext.Provider 
            value={value}
        >
            {children}
        </DiagramParentMaxDimContext.Provider>
    )
}