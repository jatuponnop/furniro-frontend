export const formatInt = (value: number): string => {
  return value.toLocaleString("en");
};

export const formatDouble = (value: number): string => {
  return Number(value.toFixed(2)).toLocaleString("en", {
    minimumFractionDigits: 2,
  });
};
