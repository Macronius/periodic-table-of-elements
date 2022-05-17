import React, { useEffect, useRef } from 'react';

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
    number;




export const ElementalConfiguration = (props) => {

    // console.log(props);

    if (props.parentDimensionsObj) {
        const {parentWidth, parentHeight} = props.parentDimensionsObj;
        // console.log(`[ElementalConfiguration] parentDimensions: W:${parentWidth} and H:${parentHeight}`);
    }
    
    if (props.data) {
        ({atomic_mass, electron_configuration, number} = props.data);
    }
    else {
        ({atomic_mass, electron_configuration, number} = data.elements[0]);
    }

    const setup = (p5, canvasParentRef) => {
        // p5.createCanvas(330,330).parent(canvasParentRef);
        p5.createCanvas(320,320).parent(canvasParentRef);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    margin: 0 auto;
    /* background-color: melon; */
    padding: 0.25rem;
`;

const SketchActual = styled(Sketch)`
    /* width: auto; */
    width: 100%;
    /* width: 96%; */
    margin: 0.5rem auto;
    /* margin-left: 1.5rem; */
    /* margin-top: 1rem; */
    /* margin-left: calc(100% - 330px / 2); */
    /* z-index: 5; */
    /* width: 100%; */
    /* height: 100%; */
    /* border: 3px solid yellow; */
    /* background-color: orange; */

`

