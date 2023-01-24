import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
  useParams
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./\bChart";
import { Header, Title, Loading, Container } from "./Coins";
import Price from "./Price";
import { useQuery } from "@tanstack/react-query";
import { infoFetcher, priceFetcher } from "../api";
import {Helmet} from "react-helmet-async"
import HelmetCom from "./HelmetCom";

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

const BackBtn = styled.button`
  background-color: ${props => props.theme.boxColor};
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 30px;
  color: ${props => props.theme.textColor};
  border: none;
  border-radius: 100%;
`

const Overivew = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.boxColor};
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

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  background-color: ${props => props.theme.boxColor};
  padding: 10px 0;
  color:${props => props.theme.textColor};
  border-radius: 10px;
  a {
    display: block;
    width: 100%;
    color: ${(props) => (props.isActive ? "red" : props.theme.textColor)};
    font-size: 16px;
  }
`;

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  console.log(chartMatch);
  const {
    isLoading: infoLoading,
    data: infoData,
  } = useQuery<InfoDataTypes>(["info", coinId], () => infoFetcher(`${coinId}`));

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceDataTypes>(
    ["price", coinId],
    () => priceFetcher(`${coinId}`),
    {
      refetchInterval:5000
    }
  );

  console.log(priceData?.quotes.USD.percent_change_12h);

  const loading = infoLoading || priceLoading;

  const navigate = useNavigate();


  return (
    <>
      <HelmetCom
        state={state}
        loading={loading}
        infoData={infoData?.name}
      />
      <Container>
        <Header>
          <Title>
            {state ? state : loading ? "Loading.." : infoData?.name}
          </Title>
          <BackBtn onClick={() => navigate(-1)}>뒤로가기</BackBtn>
        </Header>
        {loading ? (
          <Loading>Loading..</Loading>
        ) : (
          <>
            <Overivew>
              <OverviewItem>
                <span>Rank:</span>
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>{infoData?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Price</span>
                <span>{priceData?.quotes.USD.price}</span>
              </OverviewItem>
            </Overivew>
            <Description>{infoData?.description}</Description>
            <Overivew>
              <OverviewItem>
                <span>Total Supply:</span>
                <span>{priceData?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{priceData?.max_supply}</span>
              </OverviewItem>
            </Overivew>
          </>
        )}
        <Tabs>
          <Tab isActive={chartMatch !== null}>
            <Link to="chart">Chart</Link>
          </Tab>
          <Tab isActive={priceMatch !== null}>
            <Link to="price">Price</Link>
          </Tab>
        </Tabs>
        <Routes>
          <Route path="chart" element={<Chart coinId={coinId as string} />} />
          <Route path="price" element={<Price coinId={coinId as string} />} />
        </Routes>
      </Container>
    </>
  );
};

export default Coin;
