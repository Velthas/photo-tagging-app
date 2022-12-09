import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatTime from '../../utils/time';

function BoardItem({ score, rank }) {
  return (
    <Wrapper>
      <Rank>{rank}</Rank>
      <Name>{score.name}</Name>
      <Time>{formatTime(score.time)}</Time>
    </Wrapper>
  );
}

BoardItem.propTypes = {
  score: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid black;

  height: 25px;
  font-size: 1.3rem;
`;

const Rank = styled.div`
  width: 20%;
`;

const Width40 = {
  width: '40%',
};

const Name = styled.div(Width40);
const Time = styled.div(Width40);

export default BoardItem;
