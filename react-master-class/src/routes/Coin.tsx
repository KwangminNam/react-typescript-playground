import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
 color: ${props => props.theme.textColor};
`

const Coin = () => {
  const { coinId } = useParams();
  return (
    <Title>코인</Title>

  );
};

export default Coin;