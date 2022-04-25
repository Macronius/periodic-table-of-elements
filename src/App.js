
import React from 'react';

import styled from 'styled-components';

import PeriodicTable from './components/PeriodicTable';

const App = () => {

  return (
    <AppContainer>
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid </small>
        <ContentContainer>
          <PeriodicTable />
        </ContentContainer>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  width: 96vw;
  height: 96vh;
  margin: 0 auto;
  border-radius: 7px;
  background-color: #ddd;
  z-index: -10;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`