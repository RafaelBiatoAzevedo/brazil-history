import "intl";
import "intl/locale-data/jsonp/pt-BR";

export function formatCurrency(value = 0): string {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(value)
    .replace("R$", "R$ ");
}

export const unformatCurrency = (value: string): number =>
  value ? Number(value.replace(/\D/g, "")) / 100 : 0;

export function formatCurrencyNoCipher(value = 0): string {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(value)
    .replace("R$", "");
}
