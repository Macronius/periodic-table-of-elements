import React from 'react';

import styled from 'styled-components';

import data from '../data/PeriodicTableJSON.json';

import ElementTile from './ElementTile.classComponent';




const PeriodicTable = (props) => {

    const {mode, number, }

    return(
        <PeriodicTableContainer>
            {
                data.elements.map( element => (
                    <ElementTileStyled 
                        element={element} 
                        name={"marcus"} 
                        value={2017} 
                        dataAttrNumber={17}
                    />
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

const ElementTileStyled = styled(ElementTile)`
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