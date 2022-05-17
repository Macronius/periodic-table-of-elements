

import React, { createContext, useState } from 'react';


// CONTEXT
export const SelectedValueContext = createContext({
    selectedValue: null,
    setSelectedValue: () => null,
})


// PROVIDER
export const SelectedValueProvider = ({children}) => {

    const [selectedValue, setSelectedValue] = useState(0);

    const value = {selectedValue, setSelectedValue};

    return (
        <SelectedValueContext.Provider value={value}>
            {children}
        </SelectedValueContext.Provider>
    )

}