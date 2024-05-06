import { RuleTester } from 'eslint';
import rule from '../../src/rules/enforceFilenameRule';

let ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('enforce-filename-ts', rule, {
  valid: [
    {
      code: 'class ServiceName {}',
      filename: 'ServiceName.ts'
    },
    {
      code: 'export class ServiceName {}',
      filename: 'ServiceName.ts'
    },
    {
      code: `export class ServiceName { static fn() { return 1; } }
             export class OtherClass { otherFn() { return true; } }`,
      filename: 'ServiceName.ts'
    },
    {
      code: 'abstract class ServiceName {}',
      filename: 'ServiceName.ts'
    },
    {
      code: 'export default class ServiceName {}',
      filename: 'ServiceName.ts'
    },

    {
      code: 'export const helperFunction = () => {};',
      filename: 'serviceHelper.ts'
    },
    {
      code: 'declare namespace CoolTypes {}',
      filename: 'types.d.ts'
    },
    {
      code: 'describe("helperFunction", () => {});',
      filename: 'serviceHelper.spec.ts'
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

ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020, // Adjust based on your needs
    sourceType: 'module', // Use 'script' or 'module' as needed
    // For @babel/eslint-parser, you might need to set requireConfigFile to false if you're not using a Babel config file
    requireConfigFile: false,
  }
});

ruleTester.run('enforce-filename-js', rule, {
  valid: [
    {
      code: 'module.exports = class ServiceName {};',
      filename: 'ServiceName.js'
    }
  ],
  invalid: []
});
