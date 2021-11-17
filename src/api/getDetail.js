const getQuote = async (id) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  return response.json();
};

export default getQuote;
