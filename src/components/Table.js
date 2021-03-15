import React, {useState, useContext} from "react";
import styled from 'styled-components';
import Token from './Token';
import triangle from '../images/bg-triangle.svg';
import {WhiteButton} from './Button';
import {ScoreContext} from '../App';

const TableStyled = styled.div`
display: grid;
grid-template-columns: 130px 130px;
justify-content: center;
justify-items: center;
gap: 30px 60px;
padding: 2em 0;
${({state}) => (state) ? `background-image: none;` : `background-image: url("${triangle}");`}
background-repeat: no-repeat;
background-position: center 95px;
background-size: 220px 200px;
& div:nth-of-type(3) {
  grid-column: span 2;
}
.in-game {
  text-align: center;
  text-transform: uppercase;
  & p {
    margin-top: 2em;
  }
}
.results-container {
  width: 100%;
  position: relative;
  height:90px;
}
.results {
  position: absolute;
  text-align: center;
  left:0;
  right: 0;
  & h3 {
    font-size: 40px;
    margin: 10px;
    margin-top: -10px;
    text-transform: uppercase;
  }
}
@media screen and (min-width: 768px) {
  gap: 30px 160px;
  background-position: center 120px;
  background-size: 330px 300px;
  ${({state}) => (state != '') && 'grid-template-columns: 130px auto 130px;'} 
  ${({state}) => (state != '') && 'grid-template-areas: "op1 res op2";'} 
  ${({state}) => (state != '') && 'div:nth-of-type(3) {grid-column: initial;}'} 
  ${({state}) => (state != '') && 'gap: 35px;'} 
  .in-game {
    display: flex;
    font-weight: bold;
    flex-direction: column-reverse;
    grid-area: op1;
    p {
      margin-bottom: 2em;
    }
    &:nth-of-type(2) {
    grid-area: op2;
    }
  }
  .results-container {
    width: 230px;
    height: 100%;
    grid-area: res;
    padding-top: 20px;
  } 
  .results {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 
}
`

const elements = [
  'paper',
  'scissors',
  'rock'
]

function Table(){
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')
  const [housePick, setHousePick] = useState('default')
  const [user, setUser] = useState('')
  const {score, setScore} = useContext(ScoreContext)
  const [bgImage, setBgImage] = useState(false)
  
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min
  }

  function launchHousePick(){
    const hp = elements[getRandomInt(0,3)]
    setHousePick(hp)
    return hp
  }

  function onClick(name){
    setPlaying(true)
    setPick(name)
    setTimeout(() => {
      const hp = launchHousePick()
      const result = whoWon(name, hp)
      setUser(result)
      // console.log(result)
      settingScore(result)
    }, 1000)
  }

  function settingScore(result){
    if(result === 'win') setScore(score + 1)
    else if(result === 'lose') setScore(0)
  }

  function whoWon(pick, housePick){
    // console.log(pick, housePick)
    if(pick === housePick) return 'draw';
    else if(pick === 'rock' && housePick === 'scissors') return 'win'
    else if(pick === 'scissors' && housePick === 'paper') return 'win'
    else if(pick === 'paper' && housePick === 'rock') return 'win'
    else {return 'lose'}
  }

  function newChance(){
    setUser('')
    setHousePick('default')
    setPlaying(false)
  }

  return(
    <TableStyled state={playing}>
      {
        !playing ? (
          <>
            <Token name='paper' olo={onClick}/>
            <Token name='scissors' olo={onClick}/>
            <Token name='rock' olo={onClick}/>
          </>
        ) : (
          <>
            <div className="in-game">
              <Token name={pick} isShadowAnimated={(user === "win")}/>
              <p>You picked</p>
            </div> 
            <div className="in-game">
              <Token name={housePick} isShadowAnimated={(user === "lose")}/>
              <p>The House picked</p>
            </div>
            <div className="results-container">
              {
                housePick !== 'default' && (
                  <div className="results">
                    <h3>YOU {user}</h3>
                    <WhiteButton onClick={newChance}>
                      PLAY AGAIN
                    </WhiteButton>
                  </div>
                )
              }
            </div>
          </>
        )
      }
    </TableStyled>
  )
}

export default Table