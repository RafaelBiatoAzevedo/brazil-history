import {validatePrivateDocument} from './validatePrivateDocument';
import {validateLegalDocument} from './validateLegalDocument';

export function validateDocument(document: string): boolean {
  const newDocument = document.replace(/[\s.-]*/gim, '');

  if (newDocument.length > 11) {
    return validateLegalDocument(newDocument);
  }

  return validatePrivateDocument(newDocument);
}
