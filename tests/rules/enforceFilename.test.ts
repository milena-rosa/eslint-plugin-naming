import { RuleTester } from 'eslint';
import rule from '../../src/rules/enforceFilenameRule';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('enforce-filename', rule, {
  valid: [
    {
      code: 'export class ServiceName {}',
      filename: 'ServiceName.ts'
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: 'serviceHelper.ts'
    }
  ],
  invalid: [
    {
      code: 'export class ServiceName {}',
      filename: 'serviceName.ts',
      errors: [{ message: 'Files exporting a class should be PascalCase named.' }]
    },
    {
      code: 'export class ServiceName {}',
      filename: 'service-name.ts',
      errors: [{ message: 'Files exporting a class should be PascalCase named.' }]
    },
    {
      code: 'export class ServiceName {}',
      filename: 'service_name.ts',
      errors: [{ message: 'Files exporting a class should be PascalCase named.' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: 'ServiceHelper.ts',
      errors: [{ message: 'Files not exporting a class should be camelCase named.' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: 'service-helper.ts',
      errors: [{ message: 'Files not exporting a class should be camelCase named.' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: 'service_helper.ts',
      errors: [{ message: 'Files not exporting a class should be camelCase named.' }]
    }
  ]
});
