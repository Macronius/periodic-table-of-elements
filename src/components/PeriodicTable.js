import React, { useContext } from 'react';

import styled from 'styled-components';

import data from '../data/PeriodicTableJSON.json';

import DisplayModeSection from './display-mode-component/DisplayMode.component';

import { SelectedValueContext } from '../contexts/selectedValue.context';
import { ElementContext } from '../contexts/element.context';





// color map:
const colorMap = {
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




// const PeriodicTable = (props) => {
const PeriodicTable = () => {

    // const {setValue} = props;
    const { setSelectedValue } = useContext(SelectedValueContext);
    const {setElement } = useContext(ElementContext);

   
    return(
        <PeriodicTableContainer>
            <DisplayModeSection />
            {
                data.elements.map( element => (
                    <ElementDiv 
                        key={element.name}
                        className="element"
                        value={element.number}
                        style={
                            {
                                gridColumn: element.xpos, 
                                gridRow: element.ypos,
                                borderColor: 'darkslategray',
                                backgroundImage: `linear-gradient(45deg, ${colorMap[element.category]}, #ddd)`,
                            }
                        }
                        onClick={ () => {
                            // setValue(element.number);
                            // console.log("[PeriodicTable]: ", element );
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
                ))
            }
        </PeriodicTableContainer>
    )
}

export default PeriodicTable;


// styled components
const PeriodicTableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(18, 64px);
    grid-template-rows: repeat(10, 64px);
    grid-gap: 6px;
    z-index: 1;

    width: auto;
    height: 100%;
    border-radius: 7px;
    padding: 2.25rem;
    padding-top: 10rem;
    background-color: #FFFFEE;
    box-shadow: 0 0 15px slategray;

    &:before {
        content: "Periodic Table of Elements";
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