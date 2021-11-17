import { React } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

export default function CoinDetail() {
  const { state } = useLocation();
  const { id } = state;
  const coin = useSelector((data) => data.reduceCoins.coins);
  const date = new Date();
  date.setTime(coin[id].last_updated_at * 1000);
  const stringDate = date.toUTCString();
  return (
    <div className="w-100">
      {id.split('-').join(' ')}
      {' <> '}
      {coin[id].usd}
      {' <> '}
      {coin[id].usd_market_cap}
      {' <> '}
      {coin[id].usd_24h_vol}
      {' <> '}
      {coin[id].usd_24h_change}
      {' <> '}
      {stringDate}
      {' <> '}
    </div>
  );
}
