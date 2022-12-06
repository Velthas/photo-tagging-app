import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LevelInfo = ({levelImg, name, description, setLevel}) => {
  return (
    <InfoWrapper>
      <LevelImg src={levelImg} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to="/game"><button onClick={() => setLevel(0)}>Play!</button></Link>
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  width: calc(50% - 24px);
  padding: 12px;
  margin: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 10px solid black;
`

const LevelImg = styled.div`
  width: 100%;
  height: 250px;
  background: url(${({src}) => src});
  background-position: center;
  background-size: cover;
`

export default LevelInfo;