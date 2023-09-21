export const extractDigits = (str: string): string => {
  return str.replace(/[^\d]+/g, '');
};
