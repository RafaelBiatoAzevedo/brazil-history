export const formatUnit = (value: number): string =>
  (Number(value) || 0).toFixed(3);

export const unformatUnit = (value: string): number =>
  value ? Number(value.replace(/\D/g, '')) / 1000 : 0;
