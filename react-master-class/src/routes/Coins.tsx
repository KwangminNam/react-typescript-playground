import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 520px;
  margin: 0 auto;
`;

export const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: #fff;
    font-size: 40px;
  }
`;

const CoinUl = styled.ul``;

const CoinLi = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 10px;
  a {
    transition: color 0.2s ease-in-out;
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.aColor};
      font-weight: bold;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 52px;
`;

const Loading = styled.span`
  background-color: ${(props) => props.theme.bgColor};
  font-size: 42px;
  width: 200px;
  height: 200px;
  display: block;
  background-color: #fff;
  color: #000;
  margin: 0 auto;
`;

interface CoinTypes {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coinData, setCoinData] = useState<CoinTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await res.json();
      console.log(json.slice(0, 100));
      setCoinData(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loading>Loading..</Loading>
      ) : (
        <CoinUl>
          {coinData.map((item) => (
            <CoinLi key={item.id}>
              <Link to={`${item.id}`}>{item.name} &rarr;</Link>
            </CoinLi>
          ))}
        </CoinUl>
      )}
    </Container>
  );
};

export default Coins;
