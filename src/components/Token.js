import React from 'react';
import styled, {keyframes} from 'styled-components';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';

const shadow = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: 0 0 0 25px rgba(255,255,255,.02), 0 0 0 50px rgba(255,255,255,.02), 0 0 0 75px rgba(255,255,255,.02), 0 0 0 100px rgba(255,255,255,.02);
  }
`;

const animationIcon = keyframes`
  from {  
    transform: rotateZ(1deg) 
  }
  to {
    transform: rotateZ(370deg) 
  }
`

const TokenStyled = styled.div`
  height: 130px;
  width: 130px;
  border: 15px solid ${({color}) => color.base};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items:center;
  box-shadow: 0 5px 2px ${({color}) => color.border};
  
  cursor: pointer;
  ${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 25px rgba(255,255,255,.02), 0 0 0 50px rgba(255,255,255,.02), 0 0 0 75px rgba(255,255,255,.02), 0 0 0 100px rgba(255,255,255,.02);'};
  animation: 1.5s ${({ isShadowAnimated }) => isShadowAnimated ? shadow : ''} linear infinite alternate;
  &:active {
    transform: scale(.9);
  }
  .box {
    background: ${({ color }) => (color.icon == 'default') ? '#122343' : 'white'};
    box-shadow: ${({ color }) => (color.icon == 'default') ? 'transparent' : 'inset 0px 8px 4px 1px rgb(184 186 226)'};
    flex: 1;
    border: none;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    img {
      animation: 1.5s ${({ isShadowAnimated }) => isShadowAnimated ? animationIcon : ''} linear infinite forwards;
    }
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    border: 26px solid ${({color}) => color.base};

  }
`

const colors = {
  paper: {
    icon: paper,
    border: 'hsl(230, 89%, 62%)',
    base: 'hsl(230, 89%, 65%)',
  },
  rock: {
    icon: rock,
    border: 'hsl(349, 71%, 52%)',
    base: 'hsl(349, 70%, 56%)',
  },
  scissors: {
    icon: scissors,
    border: 'hsl(39, 89%, 49%)',
    base: 'hsl(40, 84%, 53%)',
  },
  default: {
    icon: 'default',
    border: 'transparent',
    base: 'transparent',
  }
}

function Token({name ='', olo, isShadowAnimated}){
  function handleClick(){
    olo && olo(name)
  }
  return(
    <TokenStyled color={colors[name]} onClick={handleClick} isShadowAnimated={isShadowAnimated}>
      <div className="box">
        {
          (name !== 'default') && (
            <img src={colors[name].icon} alt={name}/>
          )
        }
      </div>
    </TokenStyled>
  )
}

export default Token