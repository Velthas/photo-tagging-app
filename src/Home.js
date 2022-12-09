import uniqid from 'uniqid';
import styled from 'styled-components';
import LevelInfo from "./LevelInfo";
import levelData  from "./utils/levelData";
import yellowSep from'./assets/images/style/top-yellow.svg'

const Home = ({setLevel}) => {
  return (
  <div>
    <IntroWrapper>
      <IntroHeader>Welcome to Tag Em All!</IntroHeader>
      <p>Tag Em All is a game inspired by famous childrens' puzzle book series 'Where's Wally', also known to our American friends as 'Where's Waldo'. To win, you must find all the characters I have chosen in the beautiful maze posters by Egor Klyuchnyk.</p>
      <p>I am sure you're eager to prove your mettle, just remember, once you manage to Tag Em All your time will be recorded in our leaderbords! Only the best will bask in glory, so go show em!</p>
    </IntroWrapper>
    <LevelSection>
      <LevelHeader>Levels</LevelHeader>
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
    </LevelSection>
  </div>
  )
};

const IntroWrapper = styled.div`
  position: relative;

  background-color: ${({theme}) => theme.colors.dark};
  color: ${({theme}) => theme.colors.light};

  font-size: 1.5rem;
  text-align: center;

  padding: 40px;
`;

const IntroHeader = styled.h1`
  margin: 0;

  &:after {
    content: "";
    background-image: url(${yellowSep});
    position: absolute;
    right: 0;
    bottom: -6px;
    height: 30px;
    width: 100%;
  }
`;

const LevelSection = styled.div`
  background-color: ${({theme}) => theme.colors.yellow};
  font-size: 1.5rem;
`;

const LevelHeader = styled.h1`
  margin: 0;
  text-align: center;
  padding-top: 40px;
`

const LevelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px;

  @media(max-width: 700px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export default Home;