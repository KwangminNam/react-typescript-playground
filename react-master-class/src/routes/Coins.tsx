import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 520px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinUl = styled.ul``;

const CoinLi = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 10px;
  a{
    transition: color 0.2s ease-in-out;
    display: block;
    padding: 20px;
  }
  &:hover{
    a{
      color: ${(props) => props.theme.aColor};
      font-weight: bold;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 52px;
`;

const coinData = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin"
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin"
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token"
  }
];

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinUl>
        {coinData.map((item) => (
          <CoinLi key={item.id}>
            <Link to={`${item.id}`}>{item.name} &rarr;</Link>
          </CoinLi>
        ))}
      </CoinUl>
    </Container>
  );
};

export default Coins;
