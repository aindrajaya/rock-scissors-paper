import React from "react";
import styled from 'styled-components';

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 125px;
  padding: .7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  :hover {
    background: white;
    color: #171E40;
    font-weight: bold;
    margin: 0;
  }
  `

export const WhiteButton = styled(ButtonStyled)`
  background: white;
  color: black;
  width: 220px;
`

function Button({...props}){
  return(
    <ButtonStyled {...props}>
      Rules
    </ButtonStyled>
  )
}

export default Button