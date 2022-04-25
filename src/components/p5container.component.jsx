import React from 'react';
import Sketch from 'react-p5';

const P5Container = () => {

    let a = 300;
    let b = 200;
    let speed = 30;
    let speed2 = 50;

    let setup = (p5, canvasParentRef) => {
        //Canvas of size 1000x800
        let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
        //calculate to center of the canvas
        let x = (p5.windowWidth - p5.width) / 2;
        let y = (p5.windowHeight - p5.height) / 2;
        xyz.position(x,y);
    }

    let draw = p5 => {
        p5.background("rgba(100%,0%,10%, .05)");
        //ball
        p5.stroke(255);
        p5.strokeWeight(5);
        p5.noFill();
        p5.ellipse(a, b, 100, 100);

        if (a >= p5.width - 50) {
            speed = -30;
            
        }
        if (a <= 50) {
            speed = 30;
        }
        a += speed;

        if (b >= p5.height - 50) {
            speed2 = -50;
        }
        if (b <= 50) {
            speed2 = 50;
        }
        b += speed2;
    }


    return (
        <div className="p5-container">
            <Sketch setup={setup} draw={draw} className="container" />
        </div>
    )
}

export default P5Container;