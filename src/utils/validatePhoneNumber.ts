/* eslint-disable eqeqeq */
export function validatePhoneNumber(phoneNumber: string): boolean {
  let newPhoneNumber = phoneNumber.replace(/[^\d]+/g, '');

  newPhoneNumber = newPhoneNumber.replace(/_/g, '');

  if (newPhoneNumber.length !== 11) {
    return false;
  }

  // @ts-ignore
  if (newPhoneNumber[0] == 0 || newPhoneNumber[2] < 5) {
    return false;
  }
  return true;
}
