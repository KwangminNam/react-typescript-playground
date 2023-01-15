import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Header , Title , Loading , Container} from './Coins';

interface RouteState{
  state:string;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams();
  const {state} = useLocation() as RouteState;
  const [info , setInfo] = useState({});
  const [price , setPrice] = useState({});

  useEffect(()=>{
    (async()=> {
      const infoData = await(
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData = await(
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

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