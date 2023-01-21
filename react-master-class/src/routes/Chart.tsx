import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { chartFetcher } from '../api';

interface ICoinId {
  coinId:string ;
}

const Chart = ({coinId}:ICoinId) => {
  
  const {isLoading , data} = useQuery(["chart",coinId] , () => chartFetcher(coinId));
  console.log(JSON.stringify(data) + "!!!!");

  return (
    <div>
      Chart
    </div>
  );
};

export default Chart;