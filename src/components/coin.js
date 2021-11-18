import { React } from 'react';
import { useSelector } from 'react-redux';
import CoinList from './coinList';
import '../css/coin.css';
import formatter from '../formatter';

export default function Coin() {
  const coin = [];
  let cap = 0;
  let count = 0;
  let helper = 1;
  const list = useSelector((data) => data.reduceCoins.coins);
  Object.entries(list).forEach((coins) => {
    const [key, value] = coins;
    cap += value.usd_24h_vol;
    coin.push(
      <CoinList
        key={key}
        price={formatter.format(value.usd)}
        name={key}
        number={count}
      />,
    );
    if (count === 0 && helper === 1) {
      count = 1;
      helper = 0;
    } else if (count === 1 && helper === 1) {
      count = 0;
      helper = 0;
    } else {
      helper += 1;
    }
  });
  return (
    <main>
      <header className="d-flex flex-row align-items-center">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo Img" className="w-50 p-3" />
        <div className="p-3">
          <h1 className="fw-bold rs-f text-uppercase">Total 24h Vol</h1>
          <h3 className="rs-f3">{formatter.format(cap)}</h3>
        </div>
      </header>
      <div className="articleHeader p-1 w-100">
        <p className="m-0">COIN DETAILS</p>
      </div>
      <article className="coinsContainer">
        {coin}
      </article>
    </main>
  );
}
