import { Routes, Route } from "react-router"
import Game from '../Game';
import Home from '../Home';

const Main = ({setLevel, level}) => {
  return (
    <Routes>
      <Route path="/" element={<Home setLevel={setLevel} />} />
      <Route path="/game" element={<Game level={level} />} />
      <Route path="/scoreboard" element={<Game />} />
    </Routes>
  )
}

export default Main;
