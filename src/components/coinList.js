import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
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
      className={(number === 0) ? 'button blue m-0' : 'button red m-0'}
      type="button"
      id={name}
      onClick={() => {
        navigate('/detail', { state: { id: name } });
      }}
    >
      <img className="position-absolute m-3 coinlogo" src={`${process.env.PUBLIC_URL}/img/${name}.png`} alt={name} />
      <FontAwesomeIcon className="position-absolute arrowicon m-3" icon={faArrowAltCircleRight} />
      <div className="text-end text-light position-absolute info m-3">
        <h1 className="fw-bold rs-f text-uppercase">{name.split('-').join(' ')}</h1>
        <h3 className="rs-f3">{price}</h3>
      </div>
    </button>
  );
};

export default CoinList;

CoinList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
