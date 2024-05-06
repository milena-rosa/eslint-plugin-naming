// Example test using Jest
import { RuleTester } from 'eslint';
import directoryNamingRule from '../../src/rules/directoryNaming';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('directory-naming', directoryNamingRule, {
  valid: [{ code: 'var foo = 1;', filename: 'my-project/integrations/my-module/index.js' }],
  invalid: [
    {
      code: 'var foo = 1;',
      filename: 'myProject/integrations/MyModule/index.js',
      errors: [
        { message: 'Directory name "myProject" should be in kebab-case.' },
        { message: 'Directory name "MyModule" should be in kebab-case.' }
      ]
    }
  ]
});
