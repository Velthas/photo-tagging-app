import React, { useState } from "react";
import styled from "styled-components";
import { profanity } from "@2toad/profanity";
import formatTime from "./utils/time";

const ScoreboardEntry = ({time, startGame}) => {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const validateName = () => {
    if (name.length < 3) return 'Name has to be longer than 3 characters.';
    if (name.length > 12) return 'Name cannot exceed 12 characters in length';
    if (profanity.exists(name)) setName(profanity.censor(name));
  };

  return (
    <RecordEntry>
      <h1>You did it! Your time was:</h1>
      <p>{ formatTime(time) }</p>
      <p> What name should we sing of when your legendary tale is told? </p>
      <input type="text" onChange={handleChange}></input>
      <div>
      <button onClick={validateName}>Submit</button>
      <button onClick={startGame}>Retry</button>
      <button>Level Selection</button>
      </div>
    </RecordEntry>
  )
}

const RecordEntry = styled.div`
  position: fixed;
  z-index: 3000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 3px black;
  padding: 20px;
`;

export default ScoreboardEntry;
