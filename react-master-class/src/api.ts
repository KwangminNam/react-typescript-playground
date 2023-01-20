const BASE_URL = "https://api.coinpaprika.com/v1"

export async function fetchCoins() {
  return await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
  }

export async function infoFetcher(coinId:string){
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function priceFetcher(coinId:string){
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}