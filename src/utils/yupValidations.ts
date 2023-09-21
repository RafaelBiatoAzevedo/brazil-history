import * as Yup from 'yup';
import {validateDocument} from './validateDocument';
import {validatePhoneNumber} from './validatePhoneNumber';

Yup.addMethod(Yup.string, 'phoneNumber', function (errorMessage) {
  return this.test('test-phone-number-valid', errorMessage, function (value) {
    if (!value) return true;

    const {path, createError} = this;

    return (
      validatePhoneNumber(value) || createError({path, message: errorMessage})
    );
  });
});

Yup.addMethod(Yup.string, 'document', function (errorMessage) {
  return this.test('test-document-valid', errorMessage, function (value) {
    if (!value) return true;

    const {path, createError} = this;

    return (
      validateDocument(value) || createError({path, message: errorMessage})
    );
  });
});
