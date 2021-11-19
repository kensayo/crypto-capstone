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
    <div className="cryptoContainer mx-auto">
      <nav className="d-flex align-items-center position-relative flex-row">
        <Link exact to="/">
          <FontAwesomeIcon className="arrowicon m-2" icon={faAngleLeft} />
        </Link>
        <h1 className="rs-f mx-auto">Crypto Capstone</h1>
        <div className="position-absolute right">
          <FontAwesomeIcon className="arrowicon m-2" icon={faMicrophone} />
          <FontAwesomeIcon className="arrowicon m-2" icon={faWrench} />
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
