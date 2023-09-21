export function validateLegalDocument(document: string): boolean {
  if (document === undefined || typeof document !== 'string') {
    return false;
  }

  const strCNPJ = document
    .replace('.', '')
    .replace('.', '')
    .replace('/', '')
    .replace('-', '');

  if (
    strCNPJ === '00000000000000' ||
    strCNPJ === '11111111111111' ||
    strCNPJ === '22222222222222' ||
    strCNPJ === '33333333333333' ||
    strCNPJ === '44444444444444' ||
    strCNPJ === '55555555555555' ||
    strCNPJ === '66666666666666' ||
    strCNPJ === '77777777777777' ||
    strCNPJ === '88888888888888' ||
    strCNPJ === '99999999999999' ||
    strCNPJ.length !== 14
  ) {
    return false;
  }

  let tamanho = strCNPJ.length - 2;
  let numeros = strCNPJ.substring(0, tamanho);
  const digitos = strCNPJ.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(0))) {
    return false;
  }

  tamanho += 1;
  numeros = strCNPJ.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let k = tamanho; k >= 1; k--) {
    soma += Number(numeros.charAt(tamanho - k)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(1))) {
    return false;
  }

  return true;
}
