import React, { useState } from "react";
import styled from 'styled-components';

import CharDropdown from "./CharDropdown";

const Level = (props) => {
  const {imgUrl, handleClick, lastClick, characters, verifyResults } = props;
  const [choices, setChoices] = useState(false);

  return (
    <ImgContainer>
      <LevelImage 
        src={imgUrl} 
        onClick={ (e) => {
          handleClick(e);
          setChoices(!choices);
        }} 
        alt="Photo to search"
      />
      {choices && 
        <CharDropdown
          lastClick={lastClick}
          characters={characters}
          verifyResults={verifyResults}
          setChoices={setChoices}
        /> 
      }
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  position: relative;

  width: 100%;
  height: min-content;
`;

const LevelImage = styled.img`
  width: 100%;
`;

export default Level;
