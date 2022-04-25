
import React, { useState } from 'react';

import styled from 'styled-components';

import PeriodicTable from './components/PeriodicTable';
import RandomWalker from './components/RandomWalker.p5component';
// import InfoBlock from './components/InfoBlock';
// import JustAGrid from './components/JustAGrid.component.jsx';


// const initialState = {
//   a: 1,
//   b: 2,
//   c: 3,
// }



// function App() {
const App = () => {

  // const [val, setVal] = useState(5);
  // const [elem, setElem] = useState(initialState);

  return (
    <AppContainer>
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid </small>
        <ContentContainer>
          {/* <InfoBlock elem={elem} val={val} /> */}
          {/* <PeriodicTable setElem={setElem} setVal={setVal} /> */}
          <PeriodicTable />
          {/* <RandomWalker /> */}
        </ContentContainer>
      {/* <JustAGrid /> */}
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  /* width: 1800px;
  height: 1000px; */
  width: 96vw;
  height: 96vh;
  margin: 0 auto;
  border-radius: 7px;
  /* outline: 0.5px solid; */
  background-color: #ddd;
  z-index: -10;

  display: flex;
  flex-direction: column;

  /* text-align: center; */
`

const ContentContainer = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`