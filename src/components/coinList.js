import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const CoinList = (props) => {
  const {
    name,
    price,
  } = props;
  return (
    <div>
      Coin List
    </div>
  );
};

export default CoinList;

CoinList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
