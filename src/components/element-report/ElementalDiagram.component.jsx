import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import {ElementalConfiguration} from './ElementalConfiguration';
// import {RandomWalker} from '../RandomWalker.p5component';



const ElementalDiagram = (props) => {

    let parentDimensionsObj;

    const parentContainerRef = useRef(null);

    useEffect(( )=>{
        if (parentContainerRef.current) {

            const parentWidth = parentContainerRef.current.offsetWidth;
            const parentHeight = parentContainerRef.current.offsetHeight;

            console.log(
                `parentHeight: ${parentHeight} && parentWidth: ${parentWidth}`
                // `parentHeight: ${parentDimensionsObj.parentHeight} && parentWidth: ${parentDimensionsObj.parentWidth}`
            );
            console.log(parentDimensionsObj);
        }
    },[parentContainerRef, parentDimensionsObj]);

    const particle_mass = {
        proton: 1.007316,
        neutron: 1.008701,
        electron: 0.000549,
    }

    return (
        <ElementalDiagramContainer ref={parentContainerRef}>
            <h3>Simple Electron Model</h3>
            <ElementalConfiguration 
                data={props.data} 
                particleMass={particle_mass} 
                parentDimensionsObj={parentDimensionsObj} 
            />
        </ElementalDiagramContainer>
    )
}
export default ElementalDiagram;

const ElementalDiagramContainer = styled.div`
    /* width: calc(100% * 2/5); */
    width: 98%;
    margin: 0 auto;
    height: 100%;
    background-color: #fff;
    /* background-color: orange; */
    border-radius: 3px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    box-shadow: 0 0 15px slategray;

    
    h3 {
        /* padding: 0.25rem 0; */
        text-align: center;
        
    }
`