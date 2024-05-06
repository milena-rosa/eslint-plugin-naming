export const isCamelCase = (str: string) =>
  /^[a-z]+(?:[A-Z0-9][a-z0-9]*|(?<=[a-z0-9])[A-Z]+(?=[A-Z][a-z]|$))*$/.test(str);

export const isPascalCase = (str: string) => /^[A-Z]+([a-z0-9]+[A-Z]*)*([A-Z]*)?$/.test(str);

export const isKebabCase = (str: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
