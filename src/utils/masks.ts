/* eslint-disable no-plusplus */
export const unmask = (str: string): string =>
  str && str.replace(/[-)./(+ ]/g, '');

export const mask = (str: string, ...masks: string[]): string => {
  const auxMask =
    masks.find(it => unmask(it).length >= unmask(str).length) ||
    masks.sort((a, b) => unmask(a).length - unmask(b).length).pop();

  if (!auxMask) {
    return str;
  }

  let auxStr = unmask(str);
  const maskLength = unmask(auxMask).length;
  if (auxStr.length > maskLength) {
    auxStr = str.substring(0, maskLength);
  }
  let maskedStr = '';
  let j = 0;
  for (let i = 0; i < auxStr.length; i++) {
    try {
      while (auxMask[j] && auxMask[j] !== '#') {
        maskedStr += auxMask[j++];
      }
      maskedStr += auxStr[i];
      j++;
    } catch {
      break;
    }
  }
  return maskedStr;
};

export const maskDigits = (value: string, digits: number): string => {
  let maskString = '';

  for (let index = 0; index < digits; index++) {
    maskString = `${maskString}#`;
  }

  return mask(value.replace(/\D/g, ''), maskString);
};

export const maskRg = (rg: string): string =>
  mask(rg.replace(/\D/g, ''), '##.###.###-#');

export const maskDate = (date: string): string =>
  mask(date.replace(/\D/g, ''), '##/##/##');

export const maskPrivateDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '###.###.###-##');

export const maskLegalDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '##.###.###/####-##');

export const maskDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '###.###.###-##', '##.###.###/####-##');

export const maskPostalCode = (postalCode: string): string =>
  mask(postalCode.replace(/\D/g, ''), '##.###-###');

export const maskCellPhone = (phone: string): string =>
  mask(phone.replace(/\D/g, ''), '(##) # ####-####');

export const maskPhoneNumber = (phone: string): string =>
  mask(phone.replace(/\D/g, ''), '(##) ####-####', '(##) # ####-####');

export const maskVerificationCode = (code: string): string =>
  mask(code, '# # # # # #');

export const maskCardNumber = (cardNumber: string): string =>
  mask(cardNumber.replace(/\D/g, ''), '#### #### #### ####');

export const maskExpirationDate = (date: string): string =>
  mask(date.replace(/\D/g, ''), '##/##');

export const maskFloat =
  (prefix = '') =>
  (value: string): string => {
    let replacedValue = value;
    const decimalSeparator = ',';
    const thousandsSeparator = '.';

    if (replacedValue) {
      // Remove all that is not digit
      const removeDigits = new RegExp('\\D', 'g');
      replacedValue = replacedValue.replace(removeDigits, '');

      // Remove all the left zeros
      const removeLeftZeros = new RegExp('^(0)(\\d)', 'g');
      replacedValue = replacedValue.replace(removeLeftZeros, '$2');

      // Add a necessary left zeros
      while (replacedValue.length < 3) replacedValue = `0${replacedValue}`;

      // If value === 000 then return empty string
      // if (replacedValue === '000') return '';

      // Length of value without the decimal
      const valueLength = replacedValue.length - 2;
      const thousandsLength = Math.floor(valueLength / 3);

      // Create strings for regex execute
      let addMaskRegex: string | RegExp = '(\\d+)?';
      let addMaskReplace = '$1';

      // Create a loop for create a thousands separators
      for (let i = 1; i <= thousandsLength; i += 1) {
        addMaskRegex += '(\\d{3})';
        addMaskReplace += `${thousandsSeparator}$${i + 1}`;
      }

      // Add in final of regex a string to create a decimal separators
      addMaskRegex += '(\\d{2})$';
      addMaskReplace += `${decimalSeparator}$${thousandsLength + 2}`;

      // Create a instance of regex
      addMaskRegex = new RegExp(addMaskRegex);

      // Execute a regex
      replacedValue = replacedValue.replace(addMaskRegex, addMaskReplace);

      // If contain a point in start of value, then remove
      replacedValue = replacedValue.replace(/^(\.)/g, '');

      // Add a preffix
      replacedValue = replacedValue
        ? `${prefix}${replacedValue}`
        : replacedValue;

      return replacedValue;
    }

    return '';
  };

export const unmaskFloat = (amount: string) =>
  parseFloat(amount.replace(/\D/g, '').replace(/(\d*)(\d{2})$/g, '$1.$2'));
