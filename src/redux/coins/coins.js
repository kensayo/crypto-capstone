const COINS_SUCCESS = 'COINS_SUCCESS';
const api = 'https://api.coingecko.com/api/v3/simple/price?';
const coinIDs = ['smooth-love-potion', 'axie-infinity', 'bitcoin', 'ethereum', 'oec-binance-coin', 'battle-hero', 'crypto-cars-world', 'plant-vs-undead-token', 'shiba-inu', 'monsta-infinite'];
const ids = `ids=${coinIDs.join(',')}&vs_currencies=usd&include_24hr_vol=true`;

const initialState = {
  coins: [],
};

const reduceCoins = (state = initialState, action) => {
  switch (action.type) {
    case COINS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
      };
    default:
      return state;
  }
};

export const getCoins = () => (dispatch) => {
  fetch(api + ids)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: COINS_SUCCESS,
      payload: resResponse,
    }));
};

export default reduceCoins;
