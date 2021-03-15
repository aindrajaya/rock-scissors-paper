import React from 'react';
import styled from 'styled-components'
import Score from './Score'

const HeaderStyled = styled.div`
  border: 1px solid rgba(255,255,255, .29);
  padding: 1em;
  border-radius: .5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 16px;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 30px;
      line-height: 24px;
    }
  }
`

function Header(){
  return(
    <HeaderStyled>
      <h1>Rock <br/> Paper <br/> Scissors</h1>
      <Score />
    </HeaderStyled>
  )
}
export default Header