import React, { useState, useEffect } from 'react';

import styled from 'styled-components';


export const CategoriesKeyElement = (props) => {
    console.log(props);

    const {category, colorOne, colorTwo} = props;
    console.log(`category: ${category}, props.color1: ${colorOne}, props.color2: ${colorTwo}`);

    const [clr1, setClr1] = useState('#8d8d8d');
    const [clr2, setClr2] = useState('#fff');
    

    useEffect(() => {
        setClr1(colorOne);
        setClr2(colorTwo);
    }, [colorOne, colorTwo]);
    
    
    // count++;
    return (
        <CategoryColorContainer>
            <div className="color-square" 
                style={
                    {
                        backgroundImage: `linear-gradient(45deg, ${clr1}, ${clr2}`
                    }
                }
            />
            <h4>{category}</h4>
        </CategoryColorContainer>
    )
}


export const PhasesKeyElement = (props) => {

}

const CategoryColorContainer = styled.div`
    width: 150px;
    height: auto;
    margin-top: .25rem;
    /* outline: 0.5px solid; */
    padding: 3px;
    display: flex;
    justify-content: start;

    .color-square {
        margin-right: 1.125rem;
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-color: darkslategray;
        border-radius: 3px;
    }

    h4 {
        font-size: 10px;
    }
`