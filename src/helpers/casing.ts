export const isCamelCase = (str: string) =>
  /^[a-z]+(?:[A-Z0-9][a-z0-9]*|(?<=[a-z0-9])[A-Z]+(?=[A-Z][a-z]|$))*$/.test(str);

export const isPascalCase = (str: string) => /^[A-Z]+([a-z0-9]+[A-Z]*)*([A-Z]*)?$/.test(str);

export const isKebabCase = (str: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);

const splitIntoWords = (str: string) => {
  const withSpaces = str.replace(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g, ' $1').toLowerCase();
  return withSpaces.split(/[\s-_]+/);
};

export const toPascalCase = (str: string) =>
  str
    // .match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g)
    .match(/(\d+|[A-Z]?[a-z]+|[A-Z]+(?![a-z]))/g)
    ?.map((word) =>
      word.toUpperCase() === word ? word : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join('') ?? '';

export const toCamelCase = (str: string) =>
  str
    .match(/(\d+|[A-Z]?[a-z]+|[A-Z]+(?![a-z]))/g)
    ?.map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.toUpperCase() === word
        ? word
        : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join('') ?? '';

export const toKebabCase = (str: string) =>
  str
    .match(/(\d+|[A-Z]?[a-z]+|[A-Z]+(?![a-z]))/g)
    ?.map((word) => word.toLowerCase())
    .join('-') ?? '';

// function splitIntoWords(str) {
//   // Insert a space before all caps (to handle camelCase and PascalCase) and lowercase the string
//   const withSpaces = str.replace(/([A-Z])/g, ' $1').toLowerCase();
//   // Split the string into words based on spaces, hyphens, and underscores
//   return withSpaces.split(/[\s-_]+/);
// }

// function toPascalCase(str) {
//   return splitIntoWords(str)
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join('');
// }

// function toCamelCase(str) {
//   const words = splitIntoWords(str);
//   return words
//     .map((word, index) => {
//       if (index === 0) return word;
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join('');
// }

// function toKebabCase(str) {
//   return splitIntoWords(str).join('-');
// }
