import uniqid from 'uniqid';
import styled from 'styled-components';
import LevelInfo from "./LevelInfo";
import levelData  from "./utils/levelData";

const Home = ({setLevel}) => {
  return (
  <div>
    <div>
      <h1>Welcome to Tag Em All!</h1>
      <p>Tag Em All is a game inspired by famous childrens' puzzle book series 'Where's Wally', also known to our American friends as 'Where's Waldo'. To win, you must find all the characters I have chosen in the beautiful maze posters by Egor Klyuchnyk. I am sure you're eager to prove your mettle, just remember, once you manage to Tag Em All your time will be recorded in our leaderbords! Only the best will bask in glory, so go show em! </p>
    </div>
    <div>
      <h1>Level Selection</h1>
      <LevelWrapper>
      { levelData.getAll().map((level, index) => {
        return (
          <LevelInfo 
            key={uniqid()}
            setLevel={setLevel}
            levelImg={level.getImg(index)}
            name={level.getName(index)}
            description={level.getDescr(index)}
            level={index}
          />
        )}
      )
      } 
      </LevelWrapper>
    </div>
  </div>
  )
};

const LevelWrapper = styled.div`
display: flex;
flex-wrap: wrap;

background-color: white;
padding: 20px;
`;

export default Home;