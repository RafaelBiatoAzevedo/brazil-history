import {ValidationError} from 'yup';

export default function getValidationErrors<IError = Record<string, string>>(
  err: ValidationError,
): IError {
  return err.inner.reduce((acc, error) => {
    const newAcc = acc || ({} as IError);

    if (error.path) {
      Object.assign(newAcc, {[error.path]: error.message});
    }

    return newAcc;
  }, {} as IError);
}
