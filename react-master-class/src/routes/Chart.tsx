import React from "react";
import { useQuery } from "@tanstack/react-query";
import { chartFetcher } from "../api";
import ApexChart from "react-apexcharts";

interface ICoinId {
  coinId: string;
}

interface IHistroy {
  time_open: string;
  time_close: string ;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: ICoinId) => {
  const { isLoading, data, status } = useQuery<IHistroy[]>(
    ["chart", coinId],
    () => chartFetcher(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading...!!"
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: coinId,
              data: data?.map((item) => item.close) as number[]
            },
            {
              name: "price",
              data: [15, 17, 18, 50]
            }
          ]}
          options={{
            tooltip:{
              y:{
                formatter:(value) => `$${value.toFixed(2)}`
              }
            },
            theme: {
              mode: "dark"
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false
              },
              background: "transparent"
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 3
            },
            yaxis: { show: false },
            xaxis: { 
              labels: { show: false },
              axisBorder:{show:false},
              axisTicks:{show:false},
              categories: data?.map((price) =>
              new Date(+price.time_close * 1000).toISOString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["tomato"] , stops:[0,100]}
            },
            colors:["beige"]
          }}
        />
      )}
    </div>
  );
};

export default Chart;
