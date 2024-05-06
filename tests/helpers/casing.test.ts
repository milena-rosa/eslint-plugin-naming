import { isCamelCase, isKebabCase, isPascalCase } from '../../src/helpers/casing';

describe('case', () => {
  it('isCamelCase', () => {
    expect(isCamelCase('myFilenameAPIIsCamelCase')).toBe(true);
    expect(isCamelCase('NotCamelCaseHTTP')).toBe(false); // starts with uppercase
    expect(isCamelCase('alsoCamelCase123API')).toBe(true);
    expect(isCamelCase('not_camel_case_API')).toBe(false); // underscores not allowed
    expect(isCamelCase('validCamelCaseHTTP')).toBe(true);
    expect(isCamelCase('myFilenameIsCamelCase')).toBe(true);
    expect(isCamelCase('myFilenameHTTPIsCamelCase')).toBe(true);
    expect(isCamelCase('NotCamelCase')).toBe(false);
    expect(isCamelCase('alsoCamelCase123')).toBe(true);
    expect(isCamelCase('not_camel_case')).toBe(false);
    expect(isCamelCase('myAPIHandler')).toBe(true);
    expect(isCamelCase('HTTPRequest')).toBe(false);
    expect(isCamelCase('httpRequest')).toBe(true);
    expect(isCamelCase('xmlHTTPRequest')).toBe(true);
    expect(isCamelCase('myFileHTTPAPI')).toBe(true);
    expect(isCamelCase('Not_Camel_Case')).toBe(false);
    expect(isCamelCase('camelCASE')).toBe(true);
  });

  it('isKebabCase', () => {
    expect(isKebabCase('my-directory-api-is-kebab-case')).toBe(true);
    expect(isKebabCase('notKebabCaseHTTP')).toBe(false); // starts lower uppercase
    expect(isKebabCase('also-kebab-case123-api')).toBe(true);
    expect(isKebabCase('not_kebab_case_API')).toBe(false); // underscores not allowed
    expect(isKebabCase('valid-kebab-case-http')).toBe(true);
    expect(isKebabCase('my-filename-is-kebab-case')).toBe(true);
    expect(isKebabCase('my-filename-http-is-kebab-case')).toBe(true);
    expect(isKebabCase('NotKebabCase')).toBe(false);
    expect(isKebabCase('also-kebab-case123')).toBe(true);
    expect(isKebabCase('not_kebab_case')).toBe(false);
    expect(isKebabCase('my-api-handler')).toBe(true);
    expect(isKebabCase('http-request')).toBe(true);
    expect(isKebabCase('xml-http-request')).toBe(true);
    expect(isKebabCase('my-file-http-api')).toBe(true);
    expect(isKebabCase('Not_Kebab_Case')).toBe(false);
    expect(isKebabCase('kebab-case')).toBe(true);
  });

  it('isPascalCase', () => {
    expect(isPascalCase('MyFilenameAPIIsPascalCase')).toBe(true);
    expect(isPascalCase('notPascalCaseHTTP')).toBe(false); // starts lower uppercase
    expect(isPascalCase('AlsoPascalCase123API')).toBe(true);
    expect(isPascalCase('Not_Pascal_Case_API')).toBe(false); // underscores not allowed
    expect(isPascalCase('ValidPascalCaseHTTP')).toBe(true);
    expect(isPascalCase('MyFilenameIsPascalCase')).toBe(true);
    expect(isPascalCase('MyFilenameHTTPIsPascalCase')).toBe(true);
    expect(isPascalCase('notPascalCase')).toBe(false);
    expect(isPascalCase('AlsoPascalCase123')).toBe(true);
    expect(isPascalCase('not_pascal_case')).toBe(false);
    expect(isPascalCase('MyAPIHandler')).toBe(true);
    expect(isPascalCase('HTTPRequest')).toBe(true);
    expect(isPascalCase('XMLHTTPRequest')).toBe(true);
    expect(isPascalCase('MyFileHTTPAPI')).toBe(true);
    expect(isPascalCase('Not_Pascal_Case')).toBe(false);
    expect(isPascalCase('PascalCASE')).toBe(true);
  });
});
