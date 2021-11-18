import { React } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import formatter from '../formatter';

export default function CoinDetail() {
  const { state } = useLocation();
  const { id } = state;
  const coin = useSelector((data) => data.reduceCoins.coins);
  const date = new Date();
  date.setTime(coin[id].last_updated_at * 1000);
  const stringDate = date.toUTCString();
  return (
    <div className="w-100">
      <header className="d-flex flex-row align-items-center justify-content-between p-5 w-100">
        <img className="coindetaillogo" src={`${process.env.PUBLIC_URL}/img/${id}.png`} alt={id} />
        <div className="text-endm-3">
          <h1 className="fw-bold rs-f text-uppercase">{id.split('-').join(' ')}</h1>
          <h3 className="rs-f3 text-end">{formatter.format(coin[id].usd)}</h3>
        </div>
      </header>
      <article className="d-flex flex-column">
        <div className="infoCoin text-uppercase">
          {id.split('-').join(' ')}
        </div>
        <div className="infoCoin d-flex justify-content-between py-3 px-1 flex-row">
          <span>Name</span>
          <span>{formatter.format(coin[id].usd)}</span>
        </div>
        <div className="infoCoin d-flex justify-content-between py-3 px-1 flex-row">
          <span>Market Cap</span>
          <span>{formatter.format(coin[id].usd_market_cap)}</span>
        </div>
        <div className="infoCoin d-flex justify-content-between py-3 px-1 flex-row">
          <span>24h Vol.</span>
          <span>{formatter.format(coin[id].usd_24h_vol)}</span>
        </div>
        <div className="infoCoin d-flex justify-content-between py-3 px-1 flex-row">
          <span>24h Change</span>
          <span>{formatter.format(coin[id].usd_24h_change)}</span>
        </div>
        <div className="infoCoin d-flex justify-content-between py-3 px-1 flex-row">
          <span>Updated at</span>
          <span>{stringDate}</span>
        </div>
      </article>
    </div>
  );
}
