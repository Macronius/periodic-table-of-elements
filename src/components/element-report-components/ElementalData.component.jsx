import React from 'react';

import styled from 'styled-components';



const ElementalData = (props) => {
    const {atomic_mass, boil, density, melt, name, number, symbol, summary} = props.data;

    const atomic_volume = (atomic_mass / density).toFixed(2);
    

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
    width: calc(100% * 3/5);
    height: 100%;
    background-color: white;
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
        padding: 2px;
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