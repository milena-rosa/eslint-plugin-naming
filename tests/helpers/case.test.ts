import { isFilenameCamelCase, isFilenamePascalCase } from '../../src/helpers/casing';

describe('case', () => {
  it('isFilenameCamelCase', () => {
    expect(isFilenameCamelCase('myFilenameAPIIsCamelCase.js')).toBe(true);
    expect(isFilenameCamelCase('NotCamelCaseHTTP.js')).toBe(false); // starts with uppercase
    expect(isFilenameCamelCase('alsoCamelCase123API.js')).toBe(true);
    expect(isFilenameCamelCase('not_camel_case_API.js')).toBe(false); // underscores not allowed
    expect(isFilenameCamelCase('validCamelCaseHTTP.js')).toBe(true);
    expect(isFilenameCamelCase('myFilenameIsCamelCase.js')).toBe(true);
    expect(isFilenameCamelCase('myFilenameHTTPIsCamelCase.js')).toBe(true);
    expect(isFilenameCamelCase('NotCamelCase.js')).toBe(false);
    expect(isFilenameCamelCase('alsoCamelCase123.js')).toBe(true);
    expect(isFilenameCamelCase('not_camel_case.js')).toBe(false);
    expect(isFilenameCamelCase('myAPIHandler.js')).toBe(true);
    expect(isFilenameCamelCase('HTTPRequest.js')).toBe(false);
    expect(isFilenameCamelCase('httpRequest.js')).toBe(true);
    expect(isFilenameCamelCase('xmlHTTPRequest.js')).toBe(true);
    expect(isFilenameCamelCase('myFileHTTPAPI.js')).toBe(true);
    expect(isFilenameCamelCase('Not_Camel_Case.js')).toBe(false);
    expect(isFilenameCamelCase('camelCASE.js')).toBe(true);
  });

  it('isFilenamePascalCase', () => {
    expect(isFilenamePascalCase('MyFilenameAPIIsPascalCase.js')).toBe(true);
    expect(isFilenamePascalCase('notPascalCaseHTTP.js')).toBe(false); // starts lower uppercase
    expect(isFilenamePascalCase('AlsoPascalCase123API.js')).toBe(true);
    expect(isFilenamePascalCase('Not_Pascal_Case_API.js')).toBe(false); // underscores not allowed
    expect(isFilenamePascalCase('ValidPascalCaseHTTP.js')).toBe(true);
    expect(isFilenamePascalCase('MyFilenameIsPascalCase.js')).toBe(true);
    expect(isFilenamePascalCase('MyFilenameHTTPIsPascalCase.js')).toBe(true);
    expect(isFilenamePascalCase('notPascalCase.js')).toBe(false);
    expect(isFilenamePascalCase('AlsoPascalCase123.js')).toBe(true);
    expect(isFilenamePascalCase('not_pascal_case.js')).toBe(false);
    expect(isFilenamePascalCase('MyAPIHandler.js')).toBe(true);
    expect(isFilenamePascalCase('HTTPRequest.js')).toBe(true);
    expect(isFilenamePascalCase('XMLHTTPRequest.js')).toBe(true);
    expect(isFilenamePascalCase('MyFileHTTPAPI.js')).toBe(true);
    expect(isFilenamePascalCase('Not_Pascal_Case.js')).toBe(false);
    expect(isFilenamePascalCase('PascalCASE.js')).toBe(true);
  });
});
