import { React } from 'react';
import { useSelector } from 'react-redux';
import CoinList from './coinList';

export default function Coin() {
  const coin = [];
  const list = useSelector((data) => data.reduceCoins.missions);
  Object.entries(list).forEach((coins) => {
    const [key, value] = coins;
    coin.push(
      <CoinList
        key={key}
        price={value.usd}
        name={key}
      />,
    );
  });
  return (
    <div>{coin}</div>
  );
}
