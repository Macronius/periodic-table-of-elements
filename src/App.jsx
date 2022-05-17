
import React , { useContext, useEffect } from 'react';

import styled from 'styled-components';

import SidePanel from './components/side-panel/SidePanel.component.jsx';
import PeriodicTable from './components/PeriodicTable';

import { SelectedValueContext } from './contexts/selectedValue.context';
import { ElementContext } from './contexts/element.context';
import { TemperatureValueContext } from './contexts/temperatureValue.context';
import { DisplayModeContext } from './contexts/displayMode.context';

import data from './data/PeriodicTableJSON.json';


const App = () => {

  const {selectedValue} = useContext(SelectedValueContext);
  const {element, setElement} = useContext(ElementContext);
  const {temperatureValue, setTemperatureValue} = useContext(TemperatureValueContext);
  const {displayMode} = useContext(DisplayModeContext);


  useEffect( () => {

    const actual = selectedValue - 1;

    setElement(data["elements"][actual]);
  }, [selectedValue, element, setElement, temperatureValue, setTemperatureValue, displayMode]);

  // use this to alert user to what is planned for this application - leave commented out for production
  // useEffect( () => {
  //   alert("this project is a work in progress.  Currently working on functionality to render element tile color according to a set temperature value and which phase the element would be at that temperature value.")
  // }, []);


  return (
    <AppContainer>
   
      <ContentContainer>

        <SidePanel />

        <RightContainer>
          <div>
            <h1>The Periodic Table of Elements</h1>
          </div>
          <PeriodicTable />
        </RightContainer>
        {/* <PeriodicTable /> */}

      </ContentContainer>

    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  height: calc(100vh - 200px);
  /* position: fixed; */
  /* top: 0; right: 0; bottom: 0; left: 0; */
  /* border-radius: 7px; */
  background-color: #fff;
  background-color: #ebebf9;
  z-index: -10;
`

const ContentContainer = styled.div`
  /* width: 70%;
  height: 70%; */
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  margin: 0 auto;
  background-color: #ebebf9;
  box-shadow: 0 0 17px black;
  border-radius: 7px;
`

const RightContainer = styled.div`
  width: 79%;
  height: 100%;

  div {
    /* box-shadow: 0 0 70px #ff00ff88 inset; */
    /* box-shadow: 0 0 70px #f2ff0087 inset; */
    box-shadow: 0 0 70px #8e8e8e41 inset;

    h1 {
      margin: 3rem 0;
      margin-left: 5rem;
      /* font-weight: bold; */
      font-size: 8rem;
      text-shadow: 4px 4px 10px darkslategray;
  
    }
  }
`