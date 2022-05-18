import React, { useContext } from 'react';

import styled from 'styled-components';

import data from '../data/PeriodicTableJSON.json';

import DisplayModeSection from './display-mode/DisplayMode.component';

import { SelectedValueContext } from '../contexts/selectedValue.context';
import { ElementContext } from '../contexts/element.context';
import { TemperatureValueContext } from '../contexts/temperatureValue.context';
import { DisplayModeContext } from '../contexts/displayMode.context';

import tileColorMode_utility from '../utilities/tileColorMode.utility';




const PeriodicTable = () => {

    let elemObj, bgColor;

    const { setSelectedValue } = useContext(SelectedValueContext);
    const {setElement } = useContext(ElementContext);
    const {temperatureValue} = useContext(TemperatureValueContext);
    const {displayMode} = useContext(DisplayModeContext);
    

    return(
        <PeriodicTableContainer>        {/* TWO SECTIONS: */}

            {/* section one */}
            <DisplayModeSection />

            {/* section two */}
            {
                data.elements.map( element => {
                    if (displayMode === "phases") {
                        elemObj = {
                            boil: element.boil,
                            melt: element.melt,
                        };
                        bgColor = tileColorMode_utility(displayMode, temperatureValue, elemObj);
                    }
                   else {
                        bgColor = tileColorMode_utility(displayMode, element.category);
                   }

                    return (
                        <ElementDiv 
                            key={element.name}
                            className="element"
                            value={element.number}
                            style={
                                {
                                    gridColumn: element.xpos, 
                                    gridRow: element.ypos,
                                    borderColor: 'darkslategray',
                                    backgroundImage: `linear-gradient(45deg, ${bgColor[0]}, ${bgColor[1]})`,
                                }
                            }
                            onClick={ () => {
                                setSelectedValue(element.number);
                                setElement(element);
                            }}
                        >
                            <p>{element.symbol}</p>
                            <small 
                                className="number"
                            >
                                {element.number}
                            </small>
                            <small className="name">{element.name}</small>
                        </ElementDiv>
                    )
                })
            }
            
        </PeriodicTableContainer>
    )
}

export default PeriodicTable;


const PeriodicTableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(18, 64px);
    grid-template-rows: repeat(10, 64px);
    grid-gap: 6px;
    z-index: 1;

    width: auto;
    width: 79%;
    min-width: 1200px;
    height: 100%;
    border-radius: 7px;
    padding: 2.25rem;
    background-color: #FFFFfE;
    box-shadow: 0 0 15px slategray;

    &:before {
        content: "";
        width: auto;
    }
`

const ElementDiv = styled.div`
    background: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba( 51,51,51, 0.479);

    &:hover {
        transform: scale(1.25, 1.25);
        z-index: 1;
        border: 1px solid darkslategray;
        cursor: pointer;
    }
    &:active {
        background-color: white;
    }

    .number {
        font-size: 8px;
        position: absolute;
        top: 5px;
        left: 5px;
    }

    .name {
        font-size: 8px;
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
`