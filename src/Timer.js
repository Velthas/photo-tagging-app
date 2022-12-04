import React, { useEffect, useState } from "react";

const Timer = ({gameOver, setRecord}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
  let interval;
  console.log(gameOver)
  if (!gameOver) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  } else if (gameOver) {
    clearInterval(interval);
    setRecord(time);
  }
  return () => clearInterval(interval);
}, [gameOver]);

  return (
    <div>
      {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      {("0" + ((time / 10) % 100)).slice(-2)}
    </div>
  )
}

export default Timer;