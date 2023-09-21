export function validatePrivateDocument(document: string): boolean {
  let newCpf = document;

  if (typeof newCpf !== 'string') return false;
  newCpf = newCpf.replace(/[\s.-]*/gim, '');
  if (
    !newCpf ||
    newCpf.length !== 11 ||
    newCpf === '00000000000' ||
    newCpf === '11111111111' ||
    newCpf === '22222222222' ||
    newCpf === '33333333333' ||
    newCpf === '44444444444' ||
    newCpf === '55555555555' ||
    newCpf === '66666666666' ||
    newCpf === '77777777777' ||
    newCpf === '88888888888' ||
    newCpf === '99999999999'
  ) {
    return false;
  }
  let soma = 0;
  let resto: number;

  for (let i = 1; i <= 9; i += 1)
    soma += parseInt(newCpf.substring(i - 1, i), 10) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(newCpf.substring(9, 10), 10)) return false;
  soma = 0;
  for (let i = 1; i <= 10; i += 1)
    soma += parseInt(newCpf.substring(i - 1, i), 10) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(newCpf.substring(10, 11), 10)) return false;
  return true;
}
