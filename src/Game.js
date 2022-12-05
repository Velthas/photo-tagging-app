import React, { useState } from "react";
import Level from './Level';
import Timer from "./Timer";
import ScoreboardEntry from "./ScoreboardEntry";
import { levelImages, levelChar } from "./utils/levelData";

const Game = () => {
  const [ level, setLevel ] = useState(1); // is used to change props dinamically
  const [ lastClick, setLastClick ] = useState(''); // stores x and y of img click
  const [ time, setTime ] = useState('0'); // is updated when game ends
  const [ gameOver, setGameOver ] = useState('false');

  const isGameOver = () => {
    const allFound = levelChar[level - 1]
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

  return (
    <div>
      { gameOver &&
        <ScoreboardEntry time={time} />}
      <Timer
        gameOver={gameOver}
        handleTimerStop={setTime} 
      />      
      <Level
        lastClick={lastClick}
        handleClick={getClickLocation}
        imgUrl={levelImages[level - 1]}
        characters={levelChar[level - 1]}
        verifyResults={verifyResults}
        setGameOver={setGameOver}
      />
    </div>
  )
}

export default Game;
