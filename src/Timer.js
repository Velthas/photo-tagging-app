import React, { useEffect, useState } from "react";
import styled from "styled-components";
import formatTime from "./utils/time";

const Timer = ({gameOver, handleTimerStop}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
  let interval;
  if (!gameOver) {
    setTime(0);
    interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
  }
  else if (gameOver) {
    clearInterval(interval);
    handleTimerStop(time);
  }
  return () => clearInterval(interval);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [gameOver]);

  return (
    <TimerWrapper>
      { formatTime(time) }
    </TimerWrapper>
  )
}

const TimerWrapper = styled.div`
  font-size: 1.6rem;
`

export default Timer;
