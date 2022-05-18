import React from 'react';
import data from '../data/PeriodicTableJSON.json';
import styled from 'styled-components';

import ElementalData from '../components/element-report-components/ElementalData.component';
import ElementalDiagram from '../components/element-report-components/ElementalDiagram.component';



const InfoBlock = ({val, elem}) => {

    const active_element = data.elements[val];

    return (
        <InfoBlockStyled>
            <ElementalData val={val} data={active_element} />
            <ElementalDiagram val={val} data={active_element} />
        </InfoBlockStyled>
    )
}

export default InfoBlock;



const InfoBlockStyled = styled.div`
    position: absolute;
    top: 2.5rem;
    left: calc(2*2.25rem + 2*6px + 2*64px);
    width: 640px;
    height: calc(300px - 2.5rem);
    outline: 0.5px solid gray;
    z-index: 5;
    display: flex;
    justify-content: space-around;
`