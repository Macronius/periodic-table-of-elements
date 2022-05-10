import React from 'react';

import Sketch from 'react-p5';

import styled from 'styled-components';

import electron_dot_structure_utility from '../../utilities/electrons.utility';
import nucleus_utility from '../../utilities/nucleus.utility'

import data from '../../data/PeriodicTableJSON.json';

let r_ring = 15;
let r_circ = r_ring / 1.618;
let offset = 12;

let atomic_mass, 
    electron_configuration, 
    electron_configuration_semantic, 
    number;




export const ElementalConfiguration = (props) => {
    // console.log("[ElementalConfiguration] props: ", props.data);
    
    if (props.data) {
        ({atomic_mass, electron_configuration, electron_configuration_semantic, number} = props.data);
    }
    else {
        ({atomic_mass, electron_configuration, electron_configuration_semantic, number} = data.elements[0]);
    }
    
    // console.log(`
    //     atomic mass: ${atomic_mass}\n
    //     electron_configuration: ${electron_configuration}\n
    //     electron_configuration_semantic: ${electron_configuration_semantic}\n
    //     number: ${number}\n
    // `);
    // const {proton, neutron, electron} = props.particleMass;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(300,300).parent(canvasParentRef);
        p5.background("rgb(51,51,51)");
        p5.angleMode(p5.DEGREES);
    };

    const draw = p5 => {
        p5.frameRate(1);
        p5.background(100,117,123);
        // p5.background(51,82,82);
        // p5.background(191, 23, 36, 100);
        p5.translate(p5.width/2, p5.height/2);

        p5.fill(255);
        p5.text(electron_configuration, -p5.width/2 + 10,-p5.height/2 +15, p5.width - 20);
        
        // p5.stroke(192);
        p5.stroke("rgba(255,255,255,.75)");
        p5.strokeWeight(0.1);
        p5.noFill();
        
        for (let i = 0; i < number; i++) {

            const theta = Math.floor(Math.random() * 360);
            const r = Math.floor(Math.random() * (r_ring - r_circ/2));

            const d_x = r * p5.cos(theta);
            const d_y = r * p5.sin(theta);

            // PROTONS 'N NEUTRONS
            if (i % 2 === 0) {
                p5.fill("rgb(165, 85, 85)");
            }
            else {
                // p5.fill("#bababa");
                p5.fill("#e9e9e9");
            }
            p5.stroke("#c8c8c8");
            p5.strokeWeight(.5);
            p5.ellipse(d_x, d_y, r_circ, r_circ);

            
        }

        nucleus_utility(p5, props.particleMass, atomic_mass, number)
        electron_dot_structure_utility(p5, number, 35, offset, 5);

    }


    return (
        <ElementalConfigurationContainer>
            <SketchActual setup={setup} draw={draw} className="sketch-container" />
        </ElementalConfigurationContainer>
    )
}




//styled components
const ElementalConfigurationContainer = styled.div`
    width: 96%;
    height: 100%;
    margin: 0 auto;
    /* background-color: melon; */
`;

const SketchActual = styled(Sketch)`
    margin: 0 auto;
    /* z-index: 5; */
    /* width: 100%; */
    /* height: 100%; */
    /* border: 3px solid yellow; */
    /* background-color: orange; */

`

