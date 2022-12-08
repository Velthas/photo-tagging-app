import { Routes, Route } from "react-router"
import Game from '../Game';
import Home from '../Home';
import Scoreboard from '../Scoreboard';

const Main = ({setLevel, level}) => {
  return (
    <Routes>
      <Route path="/" element={<Home setLevel={setLevel} />} />
      <Route path="/game" element={<Game level={level} />} />
      <Route path="/leaderboard" element={<Scoreboard level={level} />} />
    </Routes>
  )
}

export default Main;
