import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { priceFetcher } from '../api';

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

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
`

const Box = styled.div`
  background-color: #fff;
  padding: 20px;
  width: calc(50% - 5px);
  color: black;
  border-radius: 10px;
`

const Price = ({coinId}:any) => {
  
  const {data,isLoading} = useQuery<PriceDataTypes>(["price"],()=>priceFetcher(`${coinId}`))
  console.log(typeof data?.quotes.USD.percent_change_12h)
  return (
    <BoxContainer>
      {/* <Box>{data!.quotes.USD.percent_change_12h * 100}</Box> */}
      <Box>{data?.quotes.USD.percent_change_30d}</Box>
      <Box>{data?.quotes.USD.percent_change_1h}</Box>
    </BoxContainer>
  );
};

export default Price;