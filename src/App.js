import { React, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faAngleLeft, faWrench } from '@fortawesome/free-solid-svg-icons';
import { getCoins } from './redux/coins/coins';
import Coin from './components/coin';
import CoinDetail from './components/coinDetail';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const dispatchCoins = useDispatch();
  useEffect(() => {
    dispatchCoins(getCoins());
  }, []);
  return (
    <div>
      <nav className="d-flex justify-content-between flex-row">
        <Link exact to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        <span>Crypto Capstone</span>
        <div>
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faWrench} />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/detail" element={<CoinDetail />} />
      </Routes>
    </div>
  );
}

export default App;
