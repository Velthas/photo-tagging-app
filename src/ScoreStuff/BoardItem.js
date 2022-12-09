import React from "react";
import styled from "styled-components";
import formatTime from "../utils/time";

const BoardItem = ({score, rank}) => {
  return (
    <Wrapper>
      <Rank>{rank}</Rank>
      <Name>{score.name}</Name>
      <Time>{formatTime(score.time)}</Time>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid black;

  height: 25px;
  font-size: 1.3rem;
`

const Rank = styled.div`
  width: 20%;
`

const Name = styled.div`
  width: 40%
`

const Time = styled.div`
  width: 40%
`

export default BoardItem