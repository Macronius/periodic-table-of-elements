import React, { useState } from 'react';


export const DetermineColorsFromTemperature = (props) => {

    const {elementData, temp, index} = props.data;

    const initialState = {
        temperature_setting: 0,
        mass_setting: '',

    }

    const colorFamily = {
        'noble gas': '#77649B',
        'alkaline earth metal': '#F28832',
        'diatomic nonmetal': '#8384B0',
        'polyatomic nonmetal': '#5AA5DD',
        'alkali metal': '#E43638',
        'transition metal': '#FAE122',
        'post-transition metal': '#5BAA58',
        'lanthanide': '#9ABD47',
        'actinide': '#79B172',
        'metalloid': '#77B8B0',
    }

    const colorPhase = {
        gas: "#00FF00",
        liquid: "#0000FF",
        solid: "#FF000"
    }

    const [elementState, setElementState] = useState(initialState);
    const [dashboardState, setDashboardState] = useState({});
    const [backgroundColor, setBackgroundColor] = useState("#bbbb00");

    return (
        <></>
    )
}

// establish state
DetermineColorsFromTemperature.prototype.determineState = (colorScheme, temp, elementData, index) => {

    if (temp >= elementData[index].boil) {
        setBackgroundColor(colorScheme.gas)
    }
}