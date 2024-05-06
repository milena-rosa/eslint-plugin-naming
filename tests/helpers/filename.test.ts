import {
  getFileNameWithoutExtensions,
  isFilenameCamelCase,
  isFilenamePascalCase,
  removeFileExtension
} from '../../src/helpers/filename';

describe('case', () => {
  it('removeFileExtension', () => {
    expect(removeFileExtension('myFilenameAPIIsCamelCase.js')).toEqual('myFilenameAPIIsCamelCase');
    expect(removeFileExtension('NotCamelCaseHTTP.js')).toEqual('NotCamelCaseHTTP');
    expect(removeFileExtension('alsoCamelCase123API.js')).toEqual('alsoCamelCase123API');
    expect(removeFileExtension('not_camel_case_API.js')).toEqual('not_camel_case_API');
    expect(removeFileExtension('validCamelCaseHTTP.js')).toEqual('validCamelCaseHTTP');
    expect(removeFileExtension('myFilenameIsCamelCase.js')).toEqual('myFilenameIsCamelCase');
    expect(removeFileExtension('myFilenameHTTPIsCamelCase.js')).toEqual('myFilenameHTTPIsCamelCase');
    expect(removeFileExtension('NotCamelCase.js')).toEqual('NotCamelCase');
    expect(removeFileExtension('alsoCamelCase123.js')).toEqual('alsoCamelCase123');
    expect(removeFileExtension('not_camel_case.js')).toEqual('not_camel_case');
    expect(removeFileExtension('myAPIHandler.js')).toEqual('myAPIHandler');
    expect(removeFileExtension('HTTPRequest.js')).toEqual('HTTPRequest');
    expect(removeFileExtension('httpRequest.js')).toEqual('httpRequest');
    expect(removeFileExtension('xmlHTTPRequest.js')).toEqual('xmlHTTPRequest');
    expect(removeFileExtension('myFileHTTPAPI.js')).toEqual('myFileHTTPAPI');
    expect(removeFileExtension('Not_Camel_Case.js')).toEqual('Not_Camel_Case');
    expect(removeFileExtension('camelCASE.js')).toEqual('camelCASE');
  });

  it('getFileNameWithoutExtensions', () => {
    expect(getFileNameWithoutExtensions('myFilenameAPIIsCamelCase.fixtures.js')).toEqual('myFilenameAPIIsCamelCase');
    expect(getFileNameWithoutExtensions('NotCamelCaseHTTP.js')).toEqual('NotCamelCaseHTTP');
    expect(getFileNameWithoutExtensions('alsoCamelCase123API.test.js')).toEqual('alsoCamelCase123API');
    expect(getFileNameWithoutExtensions('not_camel_case_API.spec.js')).toEqual('not_camel_case_API');
    expect(getFileNameWithoutExtensions('validCamelCaseHTTP.schema.js')).toEqual('validCamelCaseHTTP');
    expect(getFileNameWithoutExtensions('myFilenameIsCamelCase.js')).toEqual('myFilenameIsCamelCase');
    expect(getFileNameWithoutExtensions('myFilenameHTTPIsCamelCase.js')).toEqual('myFilenameHTTPIsCamelCase');
    expect(getFileNameWithoutExtensions('NotCamelCase.ts')).toEqual('NotCamelCase');
    expect(getFileNameWithoutExtensions('alsoCamelCase123.js')).toEqual('alsoCamelCase123');
    expect(getFileNameWithoutExtensions('not_camel_case.xml')).toEqual('not_camel_case');
    expect(getFileNameWithoutExtensions('myAPIHandler.anything.js')).toEqual('myAPIHandler');
  });

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
