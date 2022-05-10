import React, { useContext } from 'react';


import ElementalTile from './ElementalTile.component';
// import ElementalTileClass from './ElementalTile.class';
import ElementalData from '../element-report-components/ElementalData.component';
import ElementalDiagram from '../element-report-components/ElementalDiagram.component';

// import data from '../../data/PeriodicTableJSON.json';
// import { SelectedValueContext } from '../../contexts/selectedValue.context';
import { ElementContext } from '../../contexts/element.context';

import styled from 'styled-components';



const SidePanel = () => {

    // const {selectedValue} = useContext(SelectedValueContext);
    const {element} = useContext(ElementContext);
    // console.log("data from [SidePanel]: ", data.elements[selectedValue]);
    // const element = data.elements[selectedValue];

    // console.log("[SidePanel]: ", selectedValue);

    return (
        <SidePanelContainer>
            {/* <ElementalTile data={selectedValue} /> */}
            <ElementalTile data={element} />

            {/* <ElementalData data={selectedValue} /> */}
            <ElementalData data={element} />

            {/* <ElementalDiagram data={selectedValue} /> */}
            <ElementalDiagram data={element} />
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
    height: 90%;
    background-color: yellow;
    outline: 0.5px solid lightskyblue;
    padding: .5rem;
    margin-right: 1.5rem;

    /* --panel-width: 100%; */
`