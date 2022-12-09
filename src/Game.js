import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Level from './Level';
import Timer from "./Timer";
import ScoreboardEntry from "./ScoreboardEntry";
import CharacterInfo from "./CharacterInfo";
import levelData from "./utils/levelData";
import Firestore from "./firebase/firestore";
import yellowSep from './assets/images/style/top-yellow.svg'

const Game = ({level}) => {
  const [ characters, setCharacters ] = useState([]);
  const [ lastClick, setLastClick ] = useState(''); // stores x and y of last img click
  const [ time, setTime ] = useState('0'); // is updated when game ends
  const [ gameOver, setGameOver ] = useState(false);
  const navigate = useNavigate();

  const isGameOver = () => {
    const allFound = characters
      .filter((char) => char.found).length === levelData.getLevelCharacters(level).length;
    if(allFound) setGameOver(true);
  }

  const getClickLocation = (e) => {
    Firestore.getScoreboard(level);
    const percentX = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    const percentY = (e.nativeEvent.offsetY / e.target.offsetHeight) * 100;
    setLastClick({ x: percentX, y: percentY });
  };

  const verifyResults = async (character) =>  {
    const coords = await Firestore.getCoords(character.name, level); // check coords range database
    if (lastClick.x >= coords.x.min && lastClick.x <= coords.x.max
     && lastClick.y >= coords.y.min && lastClick.y <= coords.y.max) {
      character.found = true;
      setCharacters(characters.concat([])) // triggers a re-render
      isGameOver();
    };
  };

  const startGame = () => {
    setCharacters(levelData.getLevelCharacters(level)); // deep copy char objs;
    setGameOver(false); // (re)starts the game;
  };

  const storeRecord = (data) => {
    Firestore.addScore(level, data);
    navigate('/leaderboard');
  };

  return (
    <div>
      { gameOver &&
        <ScoreboardEntry 
          time={time}
          startGame={startGame}
          storeRecord={storeRecord}
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
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({theme}) => theme.colors.dark};
  color: ${({theme}) => theme.colors.yellow};
  padding: 10px;

  height: 15vh;
  position: sticky;
  top: 0;
  z-index: 1;

  @media(max-width: 700px) {
    height: 20vh;
    flex-direction: column;
  }
`

export default Game;
