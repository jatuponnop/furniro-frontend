export const formatInt = (value: number): string => {
  return value.toLocaleString("en-US");
};

export const formatDouble = (value: number): string => {
  return Number(value).toFixed(2);
};
