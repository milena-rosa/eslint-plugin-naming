import {
  isCamelCase,
  isKebabCase,
  isPascalCase,
  toCamelCase,
  toKebabCase,
  toPascalCase
} from '../../src/helpers/casing';

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

describe('String Case Transformations', () => {
  // Tests for toPascalCase
  describe('toPascalCase', () => {
    // Existing tests...

    test('handles empty strings', () => {
      expect(toPascalCase('')).toBe('');
    });

    test('converts strings with numbers', () => {
      expect(toPascalCase('hello2world')).toBe('Hello2World');
    });

    test('converts strings starting with numbers', () => {
      expect(toPascalCase('123hello')).toBe('123Hello');
    });

    test('converts strings ending with numbers', () => {
      expect(toPascalCase('hello123')).toBe('Hello123');
    });

    test('converts strings with acronyms', () => {
      expect(toPascalCase('using API with XML and HTTP')).toBe('UsingAPIWithXMLAndHTTP');
    });

    test('handles strings starting with acronyms', () => {
      expect(toPascalCase('API calls')).toBe('APICalls');
    });

    test('handles strings ending with acronyms', () => {
      expect(toPascalCase('calls API')).toBe('CallsAPI');
    });

    test('converts strings with special characters', () => {
      expect(toPascalCase('hello@world')).toBe('HelloWorld');
    });

    test('handles mixed case formats', () => {
      expect(toPascalCase('JSONData_HTTP2Protocol')).toBe('JSONDataHTTP2Protocol');
    });

    test('handles long acronyms', () => {
      expect(toPascalCase('APIResponseXMLFormat')).toBe('APIResponseXMLFormat');
    });
  });

  // Tests for toCamelCase
  describe('toCamelCase', () => {
    // Existing tests...

    test('handles empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });

    test('converts strings with numbers', () => {
      expect(toCamelCase('hello2world')).toBe('hello2World');
    });

    test('converts strings starting with numbers', () => {
      expect(toCamelCase('123hello')).toBe('123Hello');
    });

    test('converts strings ending with numbers', () => {
      expect(toCamelCase('hello123')).toBe('hello123');
    });

    test('converts strings with acronyms', () => {
      expect(toCamelCase('using API with XML and HTTP')).toBe('usingAPIWithXMLAndHTTP');
    });

    test('handles strings starting with acronyms', () => {
      expect(toCamelCase('API calls')).toBe('apiCalls');
    });

    test('handles strings ending with acronyms', () => {
      expect(toCamelCase('calls API')).toBe('callsAPI');
    });

    test('converts strings with special characters', () => {
      expect(toCamelCase('hello@world')).toBe('helloWorld');
    });

    test('handles mixed case formats', () => {
      expect(toCamelCase('JSONData_HTTP2Protocol')).toBe('jsonDataHTTP2Protocol');
    });

    test('handles long acronyms', () => {
      expect(toCamelCase('APIResponseXMLFormat')).toBe('apiResponseXMLFormat');
    });
  });

  // Tests for toKebabCase
  describe('toKebabCase', () => {
    // Existing tests...

    test('handles empty strings', () => {
      expect(toKebabCase('')).toBe('');
    });

    test('converts strings with numbers', () => {
      expect(toKebabCase('hello2world')).toBe('hello-2-world');
    });

    test('converts strings starting with numbers', () => {
      expect(toKebabCase('123hello')).toBe('123-hello');
    });

    test('converts strings ending with numbers', () => {
      expect(toKebabCase('hello123')).toBe('hello-123');
    });

    test('converts strings with acronyms', () => {
      expect(toKebabCase('using API with XML and HTTP')).toBe('using-api-with-xml-and-http');
    });

    test('handles strings starting with acronyms', () => {
      expect(toKebabCase('API calls')).toBe('api-calls');
    });

    test('handles strings ending with acronyms', () => {
      expect(toKebabCase('calls API')).toBe('calls-api');
    });

    test('converts strings with special characters', () => {
      expect(toKebabCase('hello@world')).toBe('hello-world');
    });

    test('handles mixed case formats', () => {
      expect(toKebabCase('JSONData_HTTP2Protocol')).toBe('json-data-http-2-protocol');
    });

    test('handles long acronyms', () => {
      expect(toKebabCase('APIResponseXMLFormat')).toBe('api-response-xml-format');
    });
  });
});
