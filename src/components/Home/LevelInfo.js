import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import btnBackground from '../../assets/images/style/button-background.svg';

function LevelInfo({
  levelImg, name, description, setLevel, level,
}) {
  return (
    <InfoWrapper index={level}>
      <LevelImg src={levelImg} />
      <DescriptionWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </DescriptionWrapper>
      <StyledLink to="/game">
        <PlayButton
          level={level}
          onClick={() => setLevel(level)}
        >
          Play!
        </PlayButton>
      </StyledLink>
    </InfoWrapper>
  );
}

LevelInfo.propTypes = {
  levelImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

const InfoWrapper = styled.div`
  width: calc(50% - 24px);
  padding: 12px;
  margin: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease-in;

  background-color: ${({ index, theme }) => (index < 2 ? theme.colors.azure : theme.colors.cyan)};
  border: 5px solid black;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light}
  }

  @media(max-width: 700px) {
    width: 100%;
    margin: 12px 0px;
  }
`;

const LevelImg = styled.div`
  width: 100%;
  height: 250px;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light}
`;

const PlayButton = styled.div`
  position: relative;

  text-align: center;

  background-image: url(${btnBackground});
  background-position: 50%;

  color: ${({ theme }) => theme.colors.light};
  width: 195px;
  margin: 0 auto;
  padding: 10px 25px;  

  &:hover {
    filter: brightness(1.4);
  }

  &:after {
    position: absolute;
    right: 14px;
    bottom: -3px;

    content: "${({ level }) => `L${(`0${level + 1}`).slice(-2)}`}";
    color: ${({ theme }) => theme.colors.dark};

    font-size: 8px;
    letter-spacing: 1px;
    line-height: 1;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 0 20px 15px 20px;
`;

export default LevelInfo;
