import React, { useState } from 'react';

import styled from 'styled-components';

import data from '../data/PeriodicTableJSON.json'

import InfoBlock from './InfoBlock';


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

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}


// const PeriodicTable = ({setVal, setElem}) => {
const PeriodicTable = () => {

    const [val, setVal] = useState(117);
    const [elem, setElem] = useState(initialState);

    // const elementsList =  document.querySelectorAll(".element");
    // console.log("elementsList.length: ", elementsList.length);

    // for (let i = 0; i < elementsList.length; i++) {
    //     elementsList[i].addEventListener("click", (event) => {
    //         console.log("event: ", event);
    //     })
    // }
    

    function infoPopHelper(e) {
        console.log("element clicked: ", e)
        setElem(e.target);
        setVal(e.target.value);
    }

   
    return(
        // <div className="periodic-table">
        <PeriodicTableContainer>

            <InfoBlock elem={elem} val={val} />

            {
                data.elements.map( element => (
                    <ElementDiv 
                        key={element.name}
                        className="element"
                        value={element.number}
                        style={{
                            gridColumn: element.xpos, 
                            gridRow: element.ypos,
                            borderColor: 'darkslategray',
                            background: '-ms-gradient(linear, 45deg, blue, red)',
                            backgroundColor: colorMap[element.category],
                        }}
                        onClick={ e => infoPopHelper(e)}
                    >
                        <p>{element.symbol}</p>
                        <small className="number">{element.number}</small>
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    width: auto;
    /* outline: 0.5px solid; */
    border-radius: 7px;
    padding: 2.25rem;
    padding-top: 10rem;
    background-color: #FFFFEE;
    box-shadow: 0 0 15px slategray;

    &:before {
        content: "Periodic Table of Elements";
        width: auto;
        /* z-index: 1000; */
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
    /* font-weight: 600; */
    box-shadow: 2px 2px 3px rgba( 51,51,51, 0.479);

    &:hover {
        /* transform: scale(1.25, 1.25); */
        transform: scale(1.25, 1.25);
        z-index: 1;
        border: 1px solid darkslategray;
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