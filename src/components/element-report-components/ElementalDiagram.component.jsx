import React from 'react';

import styled from 'styled-components';

import {ElementalConfiguration} from './ElementalConfiguration';
// import {RandomWalker} from '../RandomWalker.p5component';



const ElementalDiagram = (props) => {

    const {atomic_mass, electron_configuration, electron_configuration_semantic, number} = props.data;

    const particle_mass = {
        proton: 1.007316,
        neutron: 1.008701,
        electron: 0.000549,
    }
    console.log(particle_mass);
    console.log("particle_mass.proton: ", particle_mass.proton);
    console.log("particle_mass.neutron: ", particle_mass.neutron);
    console.log("particle_mass.electron: ", particle_mass.electron);
    console.log("atomic_mass (from props): ", atomic_mass);
    console.log("electron_configuration (from props): ", electron_configuration);
    console.log("electron_configuration_semantic (from props): ", electron_configuration_semantic);
    console.log("number (from props): ", number);

    return (
        <ElementalDiagramContainer>
            <h4>ElementalDiagram Component</h4>
            <ElementalConfiguration data={props.data}/>
        </ElementalDiagramContainer>
    )
}
export default ElementalDiagram;

const ElementalDiagramContainer = styled.div`
    width: calc(100% * 2/5);
    height: 100%;
    background-color: lightskyblue;
    outline: 0.5px solid;

    /* &:nth-child(2) {
        margin: 0 auto;
    } */
    
    h4 {
        padding: 0.25rem 0;
        text-align: center;
        
    }
`