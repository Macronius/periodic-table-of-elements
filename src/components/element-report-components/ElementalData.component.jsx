import React from 'react';

import styled from 'styled-components';

let atomic_mass, boil, density, melt, name, number, symbol, summary;
let atomic_volume;



const ElementalData = (props) => {
    // console.log("[ElementalData] props: ", props);
    
    // const {atomic_mass, boil, density, melt, name, number, symbol, summary} = props.data;
    // const atomic_volume = (atomic_mass / density).toFixed(2);

    if (props.data) {
        // console.log(props.data);
        ({atomic_mass, boil, density, melt, name, number, symbol, summary} = props.data);
        atomic_volume = (atomic_mass / density).toFixed(2);
    }
    else {
        atomic_mass = 1.008;
        boil = 20.271;
        density = 0.08988;
        melt = 13.99;
        name = "Hydrogen";
        number = 1;
        symbol = "H";
        summary = "Hydrogen is the lightest element on the Periodic Table of Elements.  Its monotomic form is the most abundant substance in the universe, constituting nearly 75% of all baryonic mass.";
        atomic_volume = (atomic_mass / density).toFixed(2);
        // const atomic_mass = 1.008;
        // const boil = 20.271;
        // const density = 0.08988;
        // const melt = 13.99;
        // const name = "Hydrogen";
        // const number = 1;
        // const symbol = "H";
        // const summary = "Hydrogen is the lightest element on the Periodic Table of Elements.  Its monotomic form is the most abundant substance in the universe, constituting nearly 75% of all baryonic mass.";
    }
    

    return (
        <ElementalDataContainer>
            <div className="data-block label">
                <h2>{name}</h2>
                <div>
                    <p>Chemical Symbol: <span>{symbol}</span></p>
                    <p>Atomic number: <span>{number}</span></p>
                </div>
            </div>

            <div className="data-block summary">
                <h4>Element Summary:</h4>
                <div>
                    <span className="summary">{summary}</span>
                </div>
            </div>
            
            <div className="data-block spatial">
                <h4>Spatial:</h4>
                <div>
                    <p>
                        Atomic mass:<br />
                        <span>{atomic_mass}</span>
                    </p>
                    <p>
                        Density:<br />
                        <span>{density}</span>
                    </p>
                    <p>
                        Atomic Volume:<br />
                        <span>{atomic_volume}</span>
                    </p>
                </div>
            </div>

            <div className="data-block temps">
                <h4>Temperatures:</h4>
                <div>
                    <p>T<sub>MP</sub>: <span>{melt}</span>°F</p>
                    <p>T<sub>BP</sub>: <span>{boil}</span>°F</p>
                </div>
            </div>
        </ElementalDataContainer>
    )
}
export default ElementalData;

const ElementalDataContainer = styled.div`
    /* width: calc(100% * 3/5); */
    width: 100%;
    height: 500px;
    /* height: 80%; */
    background-color: orange;
    outline: 0.5px solid;
    margin: 0;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    /* align-items: space-around; */
    /* justify-content: center; */
    justify-content: space-around;

    
    .data-block {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        margin-top: 1%;
        font-size: 10px;
        padding: 1.5rem;
        background-color: white;

        div {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0;
            padding: 0;

            span {
                font-weight: bold;
                font-size: 12px;
            }
        }

        /* .label {

        } */

        .summary {
            font-weight: lighter;
            font-size: 10px;
            /* line-height: 1px; */
        }

        .data-block  div p {
            /* font-weight: bold; */
            font-size: 6px;
            /* font-decoration: underline; */
        }

        .temps {
            color: white;
        }
    }

        
    
        
`