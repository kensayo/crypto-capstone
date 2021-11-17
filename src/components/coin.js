import { React } from 'react';
import { useSelector } from 'react-redux';
import CoinList from './coinList';
import logo from '../img/logo.png';

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
        price={value.usd}
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
        <img src={logo} alt="Logo Img" className="w-50 p-3" />
        <div className="p-3">
          <h1>Total 24h Vol</h1>
          <span>{cap}</span>
        </div>
      </header>
      {coin}
      |
      {' '}
    </main>
  );
}
