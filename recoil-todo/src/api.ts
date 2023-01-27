
const BASE_URL = "https://api.coinpaprika.com/v1";
const customApi = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}

export async function infoFetcher(coinId:string){
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function priceFetcher(coinId:string){
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function chartFetcher(coinId:string){
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 23 * 7 * 1;
  return await (await fetch(`${customApi}/?coinId=${coinId}`)).json();
}