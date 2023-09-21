export const setOrder = (a: string, b: string): number => {
  const Maior = -1;
  const Menor = 1;
  const Igual = 0;
  if (a < b) return Maior;
  if (b > a) return Menor;
  return Igual;
};
