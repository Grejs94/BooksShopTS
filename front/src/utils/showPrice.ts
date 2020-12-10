export const showPrice = (number: number): string => {
  const mainPrice = number.toString().substr(0, 2);

  const restPrice = number.toString().substr(2);

  const newPrice = `${mainPrice},${restPrice}`;
  return newPrice;
};
