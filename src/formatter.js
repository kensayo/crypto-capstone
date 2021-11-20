function formatCoin(digits) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
  });
  return formatter;
}

export default formatCoin;
