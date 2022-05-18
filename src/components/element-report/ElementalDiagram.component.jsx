import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import {ElementalConfiguration} from './ElementalConfiguration';



const ElementalDiagram = (props) => {

    let parentDimensionsObj;

    const parentContainerRef = useRef(null);

    useEffect(( )=>{
        if (parentContainerRef.current) {

            const parentWidth = parentContainerRef.current.offsetWidth;
            const parentHeight = parentContainerRef.current.offsetHeight;

            console.log(
                `parentHeight: ${parentHeight} && parentWidth: ${parentWidth}`
            );
            console.log(parentDimensionsObj);
        }
    },[parentContainerRef, parentDimensionsObj]);

    const particle_mass = {
        proton: 1.007316,
        neutron: 1.008701,
        electron: 0.000549,
    }


// const handleNucleus = () => {

// }


    return (
        <ElementalDiagramContainer ref={parentContainerRef}>
            <h3>Simple Electron Model</h3>
            {/* <div className="options">
                <div className="nucleus" onClick={handleNucleus}></div>
                <div className="protons"></div>
                <div className="neutrons"></div>
                <div className="electrons"></div>
            </div> */}
            <ElementalConfiguration 
                data={props.data} 
                particleMass={particle_mass} 
                parentDimensionsObj={parentDimensionsObj} 
            />
            {/* <div className="extra-space-eConfig" /> */}
        </ElementalDiagramContainer>
    )
}
export default ElementalDiagram;

const ElementalDiagramContainer = styled.div`
    width: 98%;
    margin: 0 auto;
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    box-shadow: 0 0 15px slategray;

    
    h3 {
        font-size: 18px;
        text-align: center;
    }
`