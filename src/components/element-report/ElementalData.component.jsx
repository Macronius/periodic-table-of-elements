import React from 'react';

import styled from 'styled-components';

let atomic_mass, boil, density, melt, name, number, symbol, summary;
let atomic_volume;



const ElementalData = (props) => {

    if (props.data) {
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
    }
    // TROUBLESHOOT: the initial-value summary will likely cause issue later
    

    return (
        <ElementalDataContainer>
            <div className="data-block label section-sm">
                <h2>{name}</h2>
                <div>
                    <p>Chemical Symbol: <span>{symbol}</span></p>
                    <p>Atomic number: <span>{number}</span></p>
                </div>
            </div>

            <div className="data-block summary section-lg">
                <h4>Element Summary:</h4>
                <div className="summary-div">
                    <span className="summary">{summary}</span>
                </div>
            </div>
            
            <div className="data-block spatial section-sm">
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

            <div className="data-block temps section-sm">
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
    width: 100%;
    height: 700px;
    margin: 0;
    padding: .25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .section-lg {
        height: 30%;
        border-radius: 3px;
        box-shadow: 0 0 15px slategray;
    }
    .section-sm {
        height: 20%;
        border-radius: 3px;
        box-shadow: 0 0 15px slategray;
    }

    
    .data-block {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        margin-top: 1%;
        font-size: 10px;
        padding: 0.5rem;
        background-color: white;

        .summary-div {
            margin: none;
            margin-top: none;
            overflow-y: scroll;
        }

        div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0;
            padding: 0;

            span {
                font-weight: bold;
                font-size: 12px;
                height: 100%;
            }
        }

        .summary {
            font-weight: lighter;
            font-size: 12px;
            height: 60%;
        }

        .data-block  div p {
            font-size: 6px;
        }

        .temps {
            color: white;
        }
    }

        
    
        
`