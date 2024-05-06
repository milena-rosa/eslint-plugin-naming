import { isCamelCase, isPascalCase } from './casing';

export const removeFileExtension = (filename: string) => filename.replace(/\.[^/.]+$/, '');

export const getFileNameWithoutExtensions = (filename: string) => filename.split('.')[0];

export const isFilenameCamelCase = (filename: string) => {
  // Regular expression for camelCase with acronyms
  // const camelCaseWithAcronymsRegex = /^[a-z]+(?:[A-Z0-9][a-z0-9]*|(?<=[a-z0-9])[A-Z]+(?=[A-Z][a-z]|$))*$/;

  const filenameWithoutExtension = getFileNameWithoutExtensions(filename);
  return isCamelCase(filenameWithoutExtension);
};

export const isFilenamePascalCase = (filename: string) => {
  // const startsWithUpperCaseChar = /[A-Z]/.test(filename.charAt(0));
  // const camelCaseValid = isFilenameCamelCase(filename.charAt(0).toLowerCase() + filename.slice(1));
  // return startsWithUpperCaseChar && camelCaseValid;
  const filenameWithoutExtension = getFileNameWithoutExtensions(filename);
  return isPascalCase(filenameWithoutExtension);
};
