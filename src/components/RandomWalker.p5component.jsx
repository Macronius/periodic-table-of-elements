import React from 'react';
import Sketch from 'react-p5';

import styled from 'styled-components';


// function parentWidth(elem) {
//     return elem.parentElement.clientWidth;
// }
// parentWidth(document.getElementById('random-walker-container'));

export const RandomWalker = () => {

    let x;
    let y;

    

    let mag = 5.75;

    let setup = (p5, canvasParentRef) => {
        p5.createCanvas(250,250).parent(canvasParentRef);
        // p5.translate(p5.width/2, p5.height/2);
        // p5.rectMode('CENTER');
        p5.background("rgb(51,51,51)");
    }

    let draw = p5 => {

        // p5.rectMode('CENTER');
        x = p5.width / 2;
        y = p5.height / 2;
        let r_ring = 150;
        let r_circ = r_ring / 1.618;

        p5.stroke(192);
        // p5.stroke(255,255,255);
        p5.strokeWeight(0.5);
        // p5.fill( 200,200,0);
        p5.noFill();
        p5.ellipse(x,y, 150,150);

        var r = p5.floor(p5.random(0,4));

        if (x <= 0  ||  x >= p5.width) {
            x *= -1;
        }
        if (y <= 0  ||  y >= p5.height) {
            y *= -1;
        }

        switch (r) {
            // 0 = L; 1 = R; 2 = U; 3 = D
            case 0:
                x -= mag;
                break;
            case 1:
                x += mag;
                break;
            case 2:
                y += mag;
                break;
            case 3:
                y -= mag;
                break;
            default:
                break;
        }

    }

    return (
        // <div className="random-walker-container">
        <RandomWalkerContainer id="random-walker-container">
            {/* <Sketch setup={setup} draw={draw} className="random-walker-container" /> */}
            <SketchActual setup={setup} draw={draw} className="random-walker-container" />
        </RandomWalkerContainer>
    )
}




// Styled components
const RandomWalkerContainer = styled.div`
    z-index: 0;
    /* outline: 0.5px solid green; */
    width: 96%;
    height: 100%;
    /* height: 80%; */
    /* margin: 0.25rem auto; */
    margin: 0 auto;
    /* position: relative; */
    /* background-color: lightskyblue; */
`

const SketchActual = styled(Sketch)`
    z-index: 5;
    /* position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    /* border: 3px solid yellow; */
    background-color: orange;

`