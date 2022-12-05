import React, { useState } from "react";
import Level from './Level';
import Timer from "./Timer";
import ScoreboardEntry from "./ScoreboardEntry";
import { levelImages, levelChar } from "./utils/levelData";

const Game = () => {
  const [ level, setLevel ] = useState(1); // is used to change props dinamically
  const [ characters, setCharacters ] = useState([]);
  const [ lastClick, setLastClick ] = useState(''); // stores x and y of last img click
  const [ time, setTime ] = useState('0'); // is updated when game ends
  const [ gameOver, setGameOver ] = useState(false);

  const isGameOver = () => {
    const allFound = characters
      .filter((char) => char.found).length === levelChar[level - 1].length;
    if(allFound) setGameOver(true);
  }

  const getClickLocation = (e) => {
    const percentX = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    const percentY = (e.nativeEvent.offsetY / e.target.offsetHeight) * 100;
    setLastClick({ x: percentX, y: percentY });
  };

  const verifyResults = (character) =>  {
    if (lastClick.x >= character.x.min && lastClick.x <= character.x.max
     && lastClick.y >= character.y.min && lastClick.y <= character.y.max) {
        character.found = true;
        isGameOver();
    };
  };

  const startGame = () => {
    setCharacters(levelChar[level - 1].map(char => {return {...char}})); // deep copy char objs;
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
      <Timer
        gameOver={gameOver}
        handleTimerStop={setTime} 
      />      
      <Level
        lastClick={lastClick}
        handleClick={getClickLocation}
        imgUrl={levelImages[level - 1]}
        characters={characters}
        verifyResults={verifyResults}
        startGame={startGame}
      />
    </div>
  )
}

export default Game;
