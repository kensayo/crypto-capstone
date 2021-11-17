import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import '../css/coinList.css';

const CoinList = (props) => {
  const {
    name,
    price,
    number,
  } = props;
  const navigate = useNavigate();
  return (
    <button
      className={(number === 0) ? 'button blue' : 'button red'}
      type="button"
      id={name}
      onClick={() => {
        navigate('/detail', { state: { id: name } });
      }}
    >
      <h1>{name}</h1>
      <h3>{price}</h3>
      <span>{number}</span>
    </button>
  );
};

export default CoinList;

CoinList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};
