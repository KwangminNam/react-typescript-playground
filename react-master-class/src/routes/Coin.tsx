import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Header , Title , Loading , Container} from './Coins';

interface RouteState{
  state:string;
}

interface ITap{
  coin_counter:number;
  ico_counter:number;
  id:string;
  name:string;
}

interface InfoDataTypes{
  id:string
  name:string
  symbol:string
  rank:number
  is_new:boolean
  is_active:boolean
  type:string
  logo:string
  tags:ITap[]
  team:object
  description:string
  message:string
  open_source:boolean
  started_at:string
  development_status:string
  hardware_wallet:boolean
  proof_type:string
  org_structure:string
  hash_algorithm:string
  links:object
  links_extended:object
  whitepaper:object
  first_data_at:string
  last_data_at:string
}

interface PriceDataTypes{}

const Coin = () => {
  const [loading , setLoading] = useState(true);
  const {coinId} = useParams();
  const {state} = useLocation() as RouteState;
  const [info , setInfo] = useState({});
  const [price , setPrice] = useState({});

  useEffect(()=>{
    (async()=> {
      const infoData = await(
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(infoData);
      const priceData = await(
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPrice(priceData);
    })()
  },[])

  return (
    <Container>
      <Header>
        <Title>{state}</Title>
      </Header>
      {loading ? <Loading>Loading..</Loading> : null}
      
    </Container>
  );
};

export default Coin;