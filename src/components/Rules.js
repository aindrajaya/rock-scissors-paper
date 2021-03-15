import React, {useState} from "react";
import styled from 'styled-components';
import Button from './Button';
import rulesImg from '../images/image-rules.svg';
import iconClose from '../images/icon-close.svg';

const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background:  white;
    padding-top: 4em;
    padding-bottom: 4em;
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    color: grey;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: -2px;
  }
  .icon-close {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    ::before {
      content: '';
      display: ${({visible}) => visible ? 'block' : 'none'};
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0,0,0,.6);
      z-index:1;
    }
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
      z-index: 0;
    }
    .rules-overlay {
      width: 400px;
      margin: auto;
      max-height: 500px;
      padding: 3em;
      border-radius: 10px;
      box-shadow: 0 2px 10px 0 grey;
      justify-content: space-between;
      z-index:1;
    }
    .icon-close {
      position: absolute;
      top: 3.1em;
      right: 2.6em;
    }
    h2 {
      align-self: flex-start;
      margin-left: -10px;
    }
    .rules {
      margin-bottom: 1.5em;
    }
  }
`

function Rules(){
  const [visible, setVisible] = useState(false)
  function openRules(){
    setVisible(true)
  }
  function closeRules(){
    setVisible(false)
  }
  return(
    <RulesStyled visible={visible}> 
      {
        (visible) &&(
          <div className="rules-overlay">
            <h2>Rules</h2>
            <img className="rules" src={rulesImg} alt="game rules"/>
            <img className="icon-close" src={iconClose} onClick={closeRules}/>
          </div>
        )
      }
      <Button className="button" onClick={openRules}/>
    </RulesStyled>
  )
}

export default Rules