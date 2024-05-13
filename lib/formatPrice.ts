const formatPrice = (price: number) => {
  return (price / 1).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
export default formatPrice;
