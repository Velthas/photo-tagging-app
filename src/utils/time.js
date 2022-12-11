const formatTime = (miliseconds) => {
  miliseconds = Number(miliseconds);
  const minNumber = Math.floor((miliseconds / 60000));
  const minutes = minNumber < 10 ? `0${minNumber}` : minNumber;
  const seconds = (`0${Math.floor((miliseconds / 1000) % 60)}`).slice(-2);
  const ms = (`0${(miliseconds / 10) % 100}`).slice(-2);
  return (`${minutes}:${seconds}:${ms}`);
};

export default formatTime;
