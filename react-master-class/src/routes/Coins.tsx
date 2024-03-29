import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import {useSetRecoilState} from 'recoil';
import { isDarkAtom } from "../atoms";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 520px;
  margin: 0 auto;
`;

export const Header = styled.div`
  position: relative;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
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
    display: flex;
    align-items: center;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.aColor};
      font-weight: bold;
    }
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 52px;
`;

export const Loading = styled.span`
  background-color: ${(props) => props.theme.bgColor};
  font-size: 42px;
  width: 200px;
  height: 200px;
  display: block;
  background-color: #fff;
  color: #000;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
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
  const { isLoading, data } = useQuery<CoinTypes[]>(["allcoins"], fetchCoins);
  const setterFn = useSetRecoilState(isDarkAtom);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
        <button onClick={()=>{setterFn(prev => !prev)}}>Toggle</button>
      </Header>
      {isLoading ? (
        <Loading>Loading..</Loading>
      ) : (
        <CoinUl>
          {data?.slice(0, 100).map((item) => (
            <CoinLi key={item.id}>
              <Link to={`${item.id}`} state={item.name}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${item.id}.png`}
                />
                {item.name} &rarr;
              </Link>
            </CoinLi>
          ))}
        </CoinUl>
      )}
    </Container>
  );
};

export default Coins;
