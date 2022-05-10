
import React , { useState, useEffect } from 'react';

import styled from 'styled-components';

import SidePanel from './components/side-panel/SidePanel.component.jsx';
import PeriodicTable from './components/PeriodicTable';

import { DisplayModeProvider } from './contexts/displayMode.context';

import data from './data/PeriodicTableJSON.json';
// console.log(data["elements"][0]);


const App = () => {

  // initial value
  const elem = data["elements"][0];

  const [value, setValue] = useState(0);
  const [element, setElement] = useState(elem);

  useEffect( () => {

    const actual = value - 1;

    setElement(data["elements"][actual]);
    // setElement(data.elements[value]);

    // console.log("element state from App: ", element);
  }, [value, element]);




  return (
    <AppContainer>
   
      <ContentContainer>
        <SidePanel element={element} />

        <DisplayModeProvider>
          <PeriodicTable />
        </DisplayModeProvider>

      </ContentContainer>

    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  /* width: 96vw;
  height: 96vh; */
  min-width: auto;
  min-height: auto;
  /* margin: 0 auto; */
  top: 0; right: 0; bottom: 0; left: 0;
    /* display: inline-block; */
    position: fixed;
  margin: auto;
  border-radius: 7px;
  background-color: #ebebeb;
  z-index: -10;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem;
  margin: 0 auto;
`