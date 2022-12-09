import React, {useState, useEffect} from "react";
import Firestore from "./firebase/firestore";
import styled from "styled-components";
import levelData from "./utils/levelData";
import uniqid from 'uniqid';
import BoardItem from "./ScoreStuff/BoardItem";
import yellowSep from './assets/images/style/top-yellow.svg'

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
      <Levels>
        <Heading>Levels</Heading>
        <LevelContainer>
        { levelData.getAll().map((level, index) => {
        return <LevelButton key={uniqid()} onClick={() => setStage(index)}>
          {level.getName()}
        </LevelButton>}
          )}
        </LevelContainer>
      </Levels>
      <ScoreCollection>
        <Heading>Scores</Heading>
        <ScoreContainer>
          { records.map((record, index) => { return <BoardItem rank={index + 1} score={record} key={uniqid()}></BoardItem> }) }
        </ScoreContainer>
      </ScoreCollection>
    </div>
  )
}

const Heading = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
`

const Levels = styled.div`
  position: relative;
  padding: 20px;
  background-color:${({theme}) => theme.colors.dark};
  color: white;

  &:after {
    content: "";
    background-image: url(${yellowSep});
    position: absolute;
    right: 0;
    bottom: -10px;
    height: 30px;
    width: 100%;
  }
`;

const LevelContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LevelButton = styled.button`
  margin: 12px;
  width: calc(${(100 / levelData.getAll().length) + '%'} - 24px);
  padding: 10px 20px;
  background-color: ${({theme}) => theme.colors.cyan};
  color: ${({theme}) => theme.colors.dark};
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.15s smooth;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: 700px) {
    width: 80%;
  }
`;

const ScoreContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const ScoreCollection = styled.div`
  text-align: center;
  background-color: ${({theme}) => theme.colors.yellow};
  color: ${({theme}) => theme.colors.dark};
`;

export default Scoreboard;