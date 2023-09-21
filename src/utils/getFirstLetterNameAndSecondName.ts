export const getFirstLetterNameAndSecondName = (name: string): string => {
  if (name === '' || name === undefined) return '';
  const nameArray = name.split(' ');

  if (nameArray.length >= 2)
    return `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`;
  else return `${nameArray[0][0].toUpperCase()}`;
};
