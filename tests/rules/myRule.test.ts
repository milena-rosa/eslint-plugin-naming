import { RuleTester } from 'eslint';
import rule from '../../src/rules/myRule';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('my-prefix-variable', rule, {
  valid: [{ code: 'const myPrefixConst = true;' }],
  invalid: [
    {
      code: 'const variable = true;',
      errors: [{ message: 'Variable name must start with "myPrefix".' }]
    }
  ]
});
