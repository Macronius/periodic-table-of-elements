import React from 'react';

import data from '../../data/PeriodicTableJSON.json';

import styled from 'styled-components';



const ElementalTile = (props) => {

    let number;
    let symbol;
    let name;
    let mass;

    if (props.data) {
        ({number, symbol, name, mass} = props.data);
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
    width: 98%;
    margin: 0 auto;
    height: var(--panel-width);
    border: 10px inset #c44552;
    border-radius: 3px;
    background-color: #711019;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 0 15px slategray;

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
        align-items: end;
    }

`


const ElementalTileValueSmall = styled.div`
    font-size: calc(200px * 3/20 * 1.01);
    padding: 0;
    margin: 0;
`;
const ElementalTileValueMedium = styled.div`
    font-size: calc(200px * 4/20 * 1.01);
    padding: 0;
    margin: 0;
`;
const ElementalTileValueLarge = styled.div`
    font-size: calc(200px * 8/20 * 1.01);
    font-weight: bold;
    padding: 0;
    margin: 0;
`;