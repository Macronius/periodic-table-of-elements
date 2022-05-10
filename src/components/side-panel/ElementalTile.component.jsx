import React from 'react';

import data from '../../data/PeriodicTableJSON.json';

import styled from 'styled-components';

// console.log("[data] from ElementalTile: ", data.elements[0]);




// let number, symbol, name, mass;


const ElementalTile = (props) => {

    let number;
    let symbol;
    let name;
    let mass;
    // const {number, symbol, name, mass} = props.data;
    // console.log("[ElementalTile.component] props.data: ", props.data);

    if (props.data) {
        ({number, symbol, name, mass} = props.data);
        // console.log("[ElementalTile.component] props.data: ", props.data);
    }
    else {
        ({number, symbol, name, mass} = data.elements[0]);
    }


    return (
        <ElementalTileContainer>
            <div className="element-tile-section left">
                <ElementalTileValueMedium 
                    className="element-tile-values" 
                    id="atomic-number"
                >
                    {number}
                </ElementalTileValueMedium>
                <ElementalTileValueLarge 
                    className="element-tile-values" 
                    id="atmoic-symbol"
                >
                    {symbol}
                </ElementalTileValueLarge>
                <ElementalTileValueMedium 
                    className="element-tile-values" 
                    id="atomic-name"
                >
                    {name}
                </ElementalTileValueMedium>
                <ElementalTileValueMedium 
                    className="element-tile-values" 
                    id="atomic-mass"
                >
                    {mass}
                </ElementalTileValueMedium>
            </div>
            <div className="element-tile-section right">
                <ElementalTileValueSmall className="element-tile-values">2</ElementalTileValueSmall>
                <ElementalTileValueSmall className="element-tile-values">8</ElementalTileValueSmall>
                <ElementalTileValueSmall className="element-tile-values">10</ElementalTileValueSmall>
                <ElementalTileValueSmall className="element-tile-values">2</ElementalTileValueSmall>
            </div>
        </ElementalTileContainer>
    )
}

export default ElementalTile;


const ElementalTileContainer = styled.div`
    width: 100%;
    height: var(--panel-width);
    border: 20px solid #c44552;
    background-color: #711019;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .element-tile-section {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    
        .element-tile-values {
            color: #dadada;
            margin: 0;
            padding: 0;
        }
    }

    .right {
        /* justify-content: end; */
        align-items: end;
    }
    /* .right > * {
        margin-bottom: 1.5rem;
    } */

`


const ElementalTileValueSmall = styled.div`
    font-size: calc(200px * 3/20 * 1.01);
    padding: 0;
    margin: 0;
    /* outline: 0.5px solid yellow; */
`;
const ElementalTileValueMedium = styled.div`
    font-size: calc(200px * 4/20 * 1.01);
    padding: 0;
    margin: 0;
    /* outline: 0.5px solid yellow; */
`;
const ElementalTileValueLarge = styled.div`
    font-size: calc(200px * 8/20 * 1.01);
    font-weight: bold;
    padding: 0;
    margin: 0;
    /* outline: 0.5px solid yellow; */
`;