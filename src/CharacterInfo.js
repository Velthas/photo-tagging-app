import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

const CharacterInfo = ({characters}) => {
  return(
    <CharacterWrapper>
      {characters.map((char) => { 
        return (
          <CharacterInfoContainer 
            key={uniqid()}
            found={char.found}
          >
            <CharImg 
              src={char.picture} 
              alt={char.name} 
            />
            <CharName>
              {char.name}
            </CharName>
          </CharacterInfoContainer>
        )
      })}
    </CharacterWrapper>
  )
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterWrapper = styled(FlexContainer)`
  gap: 20px;
`;

const CharacterInfoContainer = styled(FlexContainer)`
  flex-direction: column;
  
  width: 100px;
  opacity:${({found}) => found ? '0.5' : '1'};

  gap: 5px;
`

const CharImg = styled.img`
  height: 5vh;
  width: 5vh;
`;

const CharName = styled.p`
  margin: 0;
`;

export default CharacterInfo;
