import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatTime from '../../utils/time';

function Timer({ gameOver, handleTimerStop }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    let start;
    if (!gameOver) {
      setTime(0);
      start = Date.now();
      interval = setInterval(() => setTime((Date.now() - start)), 10);
    } else if (gameOver) {
      clearInterval(interval);
      handleTimerStop(time);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);

  return <TimerWrapper>{formatTime(time)}</TimerWrapper>;
}

Timer.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  handleTimerStop: PropTypes.func.isRequired,
};

const TimerWrapper = styled.div`
  font-size: 1.6rem;
  width: 100px;
`;

export default Timer;
