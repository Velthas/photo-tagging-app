import React from "react";
import styled from 'styled-components';

const Level = (props) => {
  const {imgUrl, click } = props;

  return (
    <ImgContainer>
      <LevelImage src={imgUrl} onClick={click} alt="Photo to search"></LevelImage>
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  width: 100%;
  height: min-content;
`;

const LevelImage = styled.img`
  width: 100%;
`;

export default Level;
