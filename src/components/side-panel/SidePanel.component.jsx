import React, { useContext } from 'react';

import ElementalTile from './ElementalTile.component';
import ElementalData from '../element-report/ElementalData.component';
import ElementalDiagram from '../element-report/ElementalDiagram.component';

import { ElementContext } from '../../contexts/element.context';

import styled from 'styled-components';



const SidePanel = () => {

    const {element} = useContext(ElementContext);

    return (
        <SidePanelContainer>
            
            <ElementalTile data={element} className="section" />

            <ElementalData data={element} className="section" />

            <ElementalDiagram data={element} className="section" />

        </SidePanelContainer>
    )
}

export default SidePanel;


const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: space-around;
    width: 20%;
    height: 96%;
    height: 100%;
    padding: 1px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;

    .section {
        height: 14.67%;
        outline: 2.5px solid orange;
    }
`
