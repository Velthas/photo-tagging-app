import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

const CharDropdown = ({lastClick, characters, verifyResults, setChoices}) => {

  const handleChoice = (char) => {
    verifyResults(char);
    setChoices(false);
  };

  return (
    <Container click={lastClick}>
      { characters.filter((char) => !char.found).map((char) => {
        return (
              <CharacterDiv key={uniqid()} onClick={() => handleChoice(char)}>
                <CharIcon src={char.picture} alt={char.name + ' icon'} />
                <CharName>{char.name}</CharName>
              </CharacterDiv>
          );
        })
      }
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: ${({click}) => click.x + '%'};
  top: ${({click}) => click.y + '%'};

  border-radius: 3px;

  color: ${({theme}) => theme.colors.yellow};
  background-color: ${({theme}) => theme.colors.dark};
  opacity: 0.7;
`;

const CharacterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  padding: 10px 20px;
`;

const CharName = styled.p`
  display: inline-block;
  margin: 0;
`;

const CharIcon = styled.img`
  height: 24px;
  width: 24px;
`;

export default CharDropdown;
