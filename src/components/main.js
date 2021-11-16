import React from 'react';
import logo from '../img/logo.png';
import CoinList from './coinList';

const Main = () => (
  <main>
    <header className="d-flex flex-row align-items-center">
      <img src={logo} alt="Logo Img" className="w-50 p-3" />
      <div className="p-3">
        <h1>Total 24h Vol</h1>
        <span>XXX.XXX.XXX.XX</span>
      </div>
    </header>
    <CoinList />
  </main>
);

export default Main;
