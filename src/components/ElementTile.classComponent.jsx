import React from 'react';

import styled from 'styled-components';

// import data from '../data/PeriodicTableJSON.json';


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

export default class ElementTile extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            category: this.props.category,
            phase: this.props.phase,
            element: this.props.element,
        }
    }


    
    render() {

        const { 
            number, 
            name, 
            symbol, 
            mass,
            density,
            melt, 
            boil, 
            category,
            xpos, ypos,
        } = this.props.element;

        determineColorBasedOnMode();

        return(
            <ElementTileStyled
                key={name}
                className="element"
                value={number}
                style={
                    {
                        gridColumn: xpos, 
                        gridRow: ypos,
                        borderColor: 'darkslategray',
                        backgroundImage: `linear-gradient(45deg, ${colorMap[category]}, #ddd)`,
                    }
                }
                onClick={ e => {
                    console.log("onClick callback", e);
                }}
                />
        )
    }
    // render() {

    //     return(
    //         <ElementTileStyled>
    //             {`On this date: ${this.state.date.toLocaleTimeString()}, ${this.state.name} went for running.`}
    //         </ElementTileStyled>
    //     )
    // }
}

const ElementTileStyled = styled.div`
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
//
//
//
//
//
//
/**
render() {

    return(
        <ElementTileStyled
            // key={element.name}
            // className="element"
            // value={element.number}
            // style={
            //     {
            //         gridColumn: element.xpos, 
            //         gridRow: element.ypos,
            //         borderColor: 'darkslategray',
            //         backgroundImage: `linear-gradient(45deg, ${colorMap[element.category]}, #ddd)`,
            //     }
            // }
            // onClick={ e => {
            //     console.log("onClick callback", e);
            // }}
        >
            {`On this date: ${this.state.date.toLocaleTimeString()}, ${this.state.name} went for running.`}
        </ElementTileStyled>
    )
}
 */