import { RuleTester } from 'eslint';
import path from 'node:path';
import rule from '../../src/rules/enforceFilenameRule';

let ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

const projectRoot = process.cwd();

ruleTester.run('enforce-filename-ts', rule, {
  valid: [
    {
      code: 'class ServiceName {}',
      filename: path.join(projectRoot, 'ServiceName.ts')
    },
    {
      code: 'export class ServiceName {}',
      filename: path.join(projectRoot, 'ServiceName.ts')
    },
    {
      code: `export class ServiceName { static fn() { return 1; } }
             export class OtherClass { otherFn() { return true; } }`,
      filename: path.join(projectRoot, 'ServiceName.ts')
    },
    {
      code: 'abstract class ServiceName {}',
      filename: path.join(projectRoot, 'ServiceName.ts')
    },
    {
      code: 'export default class ServiceName {}',
      filename: path.join(projectRoot, 'ServiceName.ts')
    },

    {
      code: 'export const helperFunction = () => {};',
      filename: path.join(projectRoot, 'serviceHelper.ts')
    },
    {
      code: 'declare namespace CoolTypes {}',
      filename: path.join(projectRoot, 'types.d.ts')
    },
    {
      code: 'describe("helperFunction", () => {});',
      filename: path.join(projectRoot, 'serviceHelper.spec.ts')
    }
  ],
  invalid: [
    {
      code: 'export class ServiceName {}',
      filename: path.join(projectRoot, 'serviceName.ts'),
      errors: [{ message: 'Filename is not in PascalCase. Change it to "ServiceName".' }]
    },
    {
      code: 'export class ServiceName {}',
      filename: path.join(projectRoot, 'service-name.ts'),
      errors: [{ message: 'Filename is not in PascalCase. Change it to "ServiceName".' }]
    },
    {
      code: 'export class ServiceName {}',
      filename: path.join(projectRoot, 'service_name.ts'),
      errors: [{ message: 'Filename is not in PascalCase. Change it to "ServiceName".' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: path.join(projectRoot, 'ServiceHelper.ts'),
      errors: [{ message: 'Filename is not in camelCase. Change it to "serviceHelper".' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: path.join(projectRoot, 'service-helper.ts'),
      errors: [{ message: 'Filename is not in camelCase. Change it to "serviceHelper".' }]
    },
    {
      code: 'export const helperFunction = () => {};',
      filename: path.join(projectRoot, 'service_helper.ts'),
      errors: [{ message: 'Filename is not in camelCase. Change it to "serviceHelper".' }]
    }
  ]
});

ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020, // Adjust based on your needs
    sourceType: 'module', // Use 'script' or 'module' as needed
    // For @babel/eslint-parser, you might need to set requireConfigFile to false if you're not using a Babel config file
    requireConfigFile: false
  }
});

ruleTester.run('enforce-filename-js', rule, {
  valid: [
    {
      code: 'module.exports = class ServiceName {};',
      filename: path.join(projectRoot, 'ServiceName.js')
    }
  ],
  invalid: []
});
