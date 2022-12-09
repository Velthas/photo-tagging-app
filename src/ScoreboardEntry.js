import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { profanity } from "@2toad/profanity";
import formatTime from "./utils/time";

const ScoreboardEntry = ({time, startGame, storeRecord}) => {
  const [name, setName] = useState('');
  useEffect(()=> { isNameValid() }, [name])
  const [error, setError] = useState('');

  const isNameValid = () => {
    if (name.length < 3 || name.length > 12) {
      setError('Name has to be between 3 and 12 characters long')
      return false
    } else if (profanity.exists(name)) {
      setError('Name cannot contain profanity')
      return false
    }
    setError('')
    return true;
  };

  const handleChange = (e) => {
    setName(e.target.value)
    isNameValid();
  }

  const addScore = () => {
    if(isNameValid()) storeRecord({time, name});
  }

  return (
    <RecordEntry>
      <HeadingContainer>
        <HeadingOne>You did it!</HeadingOne>
        <HeadingTwo>Your time was:</HeadingTwo>
      </HeadingContainer>
      <TimeReport>{ formatTime(time) }</TimeReport>
      <FlavorPara> What name should we sing of when your legendary tale is told? </FlavorPara>
      <InputWrapper>
        <NameInput 
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <ErrorPara>
          {error}
        </ErrorPara>
      </InputWrapper>
      <ButtonContainer>
      <Button onClick={() => addScore()}>
        Submit
      </Button>
      <Button onClick={startGame}>
        Retry
      </Button>
      <StyledLink to="/">
        <Button>
          Level Selection
        </Button>
      </StyledLink>
      </ButtonContainer>
    </RecordEntry>
  )
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MaxWidth = {
  width: '100%',
}

const NoMargin = {
  margin: '0',
}

const RecordEntry = styled(FlexColumn)`
  position: fixed;
  z-index: 3000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  background-color: black;
  color: ${({theme}) => theme.colors.light};
  border-radius: 4px;
  box-shadow: 1px 1px 3px ${({theme}) => theme.colors.dark};
  padding: 24px;

  @media(max-width: 500px) {
    width: 90%;
  }
`;

const HeadingContainer = styled.div`
  font-size: 1.3rem;
  text-align: center;

  @media(max-width: 500px) {
    font-size: 1.1rem;
  }
`

const HeadingOne = styled.h1(NoMargin);

const HeadingTwo = styled.h2(NoMargin);

const TimeReport = styled.p`
  margin: 30px 0;
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.yellow};

  @media(max-width: 500px) {
    font-size: 1.3rem;
  }
`

const FlavorPara = styled.p`
  margin-top: 0px;
  text-align: center;
`;

const InputWrapper = styled.div(MaxWidth);

const NameInput = styled.input`
  width: 100%;
  height: 25px;
  
  outline: none;
  border: none;
  background-color: ${({theme}) => theme.colors.cyan};
  padding-left: 5px;
`;

const ErrorPara = styled.p`
  color: red;
  margin-top: 5px;
  margin-bottom: 0;
  width: 100%;
  font-size: 0.8rem;
`;

const ButtonContainer = styled(FlexColumn)`
  margin-top: 20px;
  width: 100%;
`

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({theme}) => theme.colors.yellow};
  color: black;
  border: 1px solid ${({theme}) => theme.colors.dark};
  cursor: pointer;

  &:hover{
    background-color: ${({theme}) => theme.colors.cyan};
  }
`

const StyledLink = styled(Link)`
  width: 100%;
`;

export default ScoreboardEntry;
