import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Game from '../components/Game/Game';
import Home from '../components/Home/Home';
import Scoreboard from '../components/Scoreboard/Scoreboard';

function Main({ setLevel, level }) {
  return (
    <Routes>
      <Route path="/" element={<Home setLevel={setLevel} />} />
      <Route path="/game" element={<Game level={level} />} />
      <Route path="/leaderboard" element={<Scoreboard level={level} />} />
    </Routes>
  );
}

Main.propTypes = {
  setLevel: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default Main;
