const currencyFormat = value => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'MXN',
  });
  return formatter.format(value).split('MX$')[1];
};

export default currencyFormat;
