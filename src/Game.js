import React, { useEffect, useState } from "react";
import Level from './Level';
import { levelImages, levelChar } from "./utils/levelData";

const Game = () => {

  const [ level, setLevel ] = useState(1);

  const [ lastClick, setLastClick ] = useState('');
  useEffect(() => {
    verifyResults(levelChar[0])
  }, [lastClick]);

  const getClickLocation = (e) => {
    const percentX = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    const percentY = (e.nativeEvent.offsetY / e.target.offsetHeight) * 100;

    setLastClick({ x: percentX, y: percentY });
  };

  const verifyResults = (character) =>  {
    if (lastClick.x >= character.x.min && lastClick.x <= character.x.max
     && lastClick.y >= character.y.min && lastClick.y <= character.y.max) {
        console.log('Found ' + character.name);
    };
  };

  return (
    <div>
      <div></div>
      <Level click={getClickLocation} imgUrl={levelImages[level - 1]}></Level>
    </div>
  )
}

export default Game;
