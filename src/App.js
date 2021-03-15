import React, {createContext, useState} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from './GlobalStyle'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Table from './components/Table'
import Rules from './components/Rules'

const AppStyled = styled.main`
  font-family: 'Barlow Semi Condensed', Arial;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%) 30%, hsl(237, 49%, 15%) 90%);
  margin: 0;
  .app-content {
    padding: 2em;
    padding-bottom: 0;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ScoreContext = createContext(null)
function App(){
  const [score, setScore] = useState(0)
  return(
    <ScoreContext.Provider value={{score, setScore}}>
      <AppStyled>
        <GlobalStyle/>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  )
}

export default App;