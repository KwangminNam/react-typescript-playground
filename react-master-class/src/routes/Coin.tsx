import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "./\bChart";
import { Header, Title, Loading, Container } from "./Coins";
import Price from "./Price";

interface RouteState {
  state: string;
}

interface InfoDataTypes {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceDataTypes {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Overivew = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: orange;
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    &:first-child {
      font-size: 10px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
  }
`;
const Description = styled.p`
  margin: 20px 0;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{isActive : boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  background-color: tomato;
  padding: 10px 0;
  color: #fff;
  border-radius: 10px;
  a {
    display: block;
    width: 100%;
    color:${props => props.isActive ? props.theme.bgColor : "#fff"}
  }
`;


const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoDataTypes>();
  const [price, setPrice] = useState<PriceDataTypes>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");


  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <>
      <Container>
        <Header>
          <Title>{state ? state : loading ? "Loading.." : info?.name}</Title>
        </Header>
        {loading ? (
          <Loading>Loading..</Loading>
        ) : (
          <>
            <Overivew>
              <OverviewItem>
                <span>Rank:</span>
                <span>{info?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>{info?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Open Source</span>
                <span>{info?.open_source === null ? "Yes" : "NO"}</span>
              </OverviewItem>
            </Overivew>
            <Description>{info?.description}</Description>
            <Overivew>
              <OverviewItem>
                <span>Total Supply:</span>
                <span>{price?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{price?.max_supply}</span>
              </OverviewItem>
            </Overivew>
          </>
        )}
      </Container>
      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to="chart">Chart</Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to="price">Price</Link>
        </Tab>
      </Tabs>
      <Routes>
        <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </>
  );
};


export default Coin;
