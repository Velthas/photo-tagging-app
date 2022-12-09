import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

function CharacterInfo({ characters }) {
  return (
    <CharacterWrapper>
      {characters.map((char) => (
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
      ))}
    </CharacterWrapper>
  );
}

CharacterInfo.propTypes = {
  characters: PropTypes.array.isRequired,
};

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
  opacity:${({ found }) => (found ? '0.5' : '1')};

  gap: 5px;
`;

const CharImg = styled.img`
  height: 7.3vh;
  width: 7.3vh;
`;

const CharName = styled.p`
  margin: 0;
`;

export default CharacterInfo;
