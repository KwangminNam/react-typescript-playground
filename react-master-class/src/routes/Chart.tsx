import React from "react";
import { useQuery } from "@tanstack/react-query";
import { chartFetcher } from "../api";
import ApexChart from "react-apexcharts";

interface ICoinId {
  coinId: string;
}

interface IHistroy {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: ICoinId) => {
  const { isLoading, data } = useQuery<IHistroy[]>(["chart", coinId], () =>
    chartFetcher(coinId)
  );
  console.log(JSON.stringify(data) + "!!!!");

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: coinId,
              data: data?.map(item => item.close) as number[]
            },
            {
              name: "sales",
              data: [15, 17, 18, 50]
            }
          ]}
          options={{
            theme:{
              mode:"dark"
            },
            chart: {
              height: 500,
              width: 500
            }
          }}
        />
      )}
    </div>
  );
};

export default Chart;
