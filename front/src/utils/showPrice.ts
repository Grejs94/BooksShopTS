export const showPrice = (price: number): string => {
  const mainPrice = price.toString().substr(0, 2);

  const restPrice = price.toString().substr(2);

  return `${mainPrice},${restPrice}`;
};
