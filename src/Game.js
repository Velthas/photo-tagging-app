import React, { useState } from "react";
import styled from "styled-components";
import Level from './Level';
import Timer from "./Timer";
import ScoreboardEntry from "./ScoreboardEntry";
import CharacterInfo from "./CharacterInfo";
import levelData from "./utils/levelData";

const Game = ({level}) => {
  const [ characters, setCharacters ] = useState([]);
  const [ lastClick, setLastClick ] = useState(''); // stores x and y of last img click
  const [ time, setTime ] = useState('0'); // is updated when game ends
  const [ gameOver, setGameOver ] = useState(false);

  const isGameOver = () => {
    const allFound = characters
      .filter((char) => char.found).length === levelData.getLevelCharacters(level).length;
    if(allFound) setGameOver(true);
  }

  const getClickLocation = (e) => {
    const percentX = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    const percentY = (e.nativeEvent.offsetY / e.target.offsetHeight) * 100;
    console.log({percentX, percentY});
    setLastClick({ x: percentX, y: percentY });
  };

  const verifyResults = (character) =>  {
    if (lastClick.x >= character.x.min && lastClick.x <= character.x.max
     && lastClick.y >= character.y.min && lastClick.y <= character.y.max) {
      character.found = true;
      setCharacters(characters.concat([])) // triggers a re-render
      isGameOver();
    };
  };

  const startGame = () => {
    setCharacters(levelData.getLevelCharacters(level)); // deep copy char objs;
    setGameOver(false); // (re)starts the game;
  };

  return (
    <div>
      { gameOver &&
        <ScoreboardEntry 
          time={time}
          startGame={startGame}
        /> 
      }
      <GameInfoContainer>
        <Timer
          gameOver={gameOver}
          handleTimerStop={setTime} 
        />
        <CharacterInfo
          characters={characters}
        />
      </GameInfoContainer>
      <Level
        lastClick={lastClick}
        handleClick={getClickLocation}
        imgUrl={levelData.getLevelPicture(level)}
        characters={characters}
        verifyResults={verifyResults}
        startGame={startGame}
      />
    </div>
  )
};

const GameInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;
  padding: 10px;

  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 1;

  @media(max-width: 700px) {
    height: 15vh;
    flex-direction: column;
  }
`

export default Game;
