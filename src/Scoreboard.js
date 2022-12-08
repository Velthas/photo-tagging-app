import React, {useState, useEffect} from "react";
import Firestore from "./firebase/firestore";
import formatTime from "./utils/time";
import levelData from "./utils/levelData";
import uniqid from 'uniqid';

const Scoreboard = ({level}) => {
  const [stage, setStage] = useState(level);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const getScores = async () => {
      const allScores = await Firestore.getScoreboard(stage);
      const sortedScores = allScores.sort((a, b) => a.time - b.time);
      setRecords(sortedScores);
    }
    getScores();
  }, [stage]);

  return (
    <div>
      { levelData.getAll().map((level, index) => { return <div onClick={() => setStage(index)}>
          <h1>{level.getName()}</h1>
        </div>}
        )}
      { records.map((record) => { return <p key={uniqid()}>{record.name + " " + formatTime(record.time)}</p> }) }
    </div>
  )
}

export default Scoreboard;