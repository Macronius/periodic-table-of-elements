
import React, { useContext, useState } from 'react';

import { DisplayModeContext } from '../../contexts/displayMode.context';

import styled from 'styled-components';


const DisplayModeSection = () => {

    const [modeType, setModeType] = useState("category");
    const [temperatureValue, setTemperatureValue] = useState(299);

    // const modeType = document.querySelector("form");

    const changeHandler = e => {
        e.preventDefault();
        setModeType(e.target.value);
    }

    // const submitHandler = e => {
    //     e.preventDefault();
    // }

    const onChangeHandler = e => {
        e.preventDefault();
        const mode = document.getElementById("display-mode");
        console.log("selected mode: ", mode.value);
        setModeType(mode);
        
        // const tVal = document.getElementById("input-range");
        // console.log("input-range:value, ", tVal);
        // setTemperatureValue(tVal);
    }



    return (
        <DisplayModeSectionContainer>
            <h2>Choose a display mode</h2>
            {/* <form action={submitHandler}> */}
            <form>
                {/* <div className="radios-container">
                    <label>Periodic Category
                        <input type="radio" className="mode-button" name="display-mode" value="category" />
                    </label>
                    <label>Physical State(temperature)
                        <input type="radio" className="mode-button" name="display-mode" value="phase" />
                    </label>
                </div> */}
                <div className="select-section">
                    <select id="display-mode" onChange={onChangeHandler}>
                        <option value="categories">Categories</option>
                        <option value="phases">Phases</option>
                    </select>
                </div>

                {
                    modeType === "phases" && (
                        <div className="temp-range-container">
                            <label>Select temperature value for consideration of all elements' phase'
                                <input 
                                    type="range" 
                                    id="input-range" 
                                    min="0" 
                                    max="8000" 
                                    // value={tempVal}
                                    onChange={changeHandler}
                                />
                            </label>
                            <h3>Temp value: {temperatureValue}</h3>
                        </div>
                    )
                }
            </form>
        </DisplayModeSectionContainer>
    )
}
export default DisplayModeSection;

const DisplayModeSectionContainer = styled.div`
    outline: 0.7rem inset #efefef;
    background-color: #fffffe;
    width: 640px;
    height: calc(64px *3);
    /* margin: 0 auto; */

    h2 {
        font-size: 27px;
        font-weight: bold;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`