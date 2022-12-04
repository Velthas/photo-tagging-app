import React, { useEffect, useState } from "react";
import Level from './Level';
import Timer from "./Timer";
import { levelImages, levelChar } from "./utils/levelData";

const Game = () => {
  const [ level, setLevel ] = useState(1);
  const [ lastClick, setLastClick ] = useState('');
  const [ time, setTime ] = useState('0');
  const [ gameOver, setGameOver ] = useState('false');
  useEffect(() => {
    setGameOver(false)
  }, [])

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
      <Timer
        gameOver={gameOver}
        setRecord={setTime} 
      />      
      <Level
        lastClick={lastClick}
        handleClick={getClickLocation}
        imgUrl={levelImages[level - 1]}
        characters={levelChar[level - 1]}
        verifyResults={verifyResults}
      />
    </div>
  )
}

export default Game;
