import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

const CharDropdown = ({lastClick, characters, verifyResults, setChoices}) => {
  return (
    <Container click={lastClick}>
      { characters.filter((char) => !char.found).map((char) => {
        return (
              <CharacterDiv key={uniqid()} onClick={() => {
                verifyResults(char);
                setChoices(false);
              }}>
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

  border: 1px solid #dfdfdf;
  border-radius: 3px;

  color: gray;
  background-color: #fff;
  opacity: 0.7;
`;

const CharacterDiv = styled.div`
  padding: 10px 20px;
`

const CharName = styled.p`
  display: inline-block;
  margin: 0;
`

export default CharDropdown;
