import { Rule } from 'eslint';
import { Identifier } from '@typescript-eslint/types/dist/generated/ast-spec';

const myRyle: Rule.RuleModule = {
  create(context) {
    return {
      VariableDeclarator(node) {
        const variableName = (node.id as Identifier).name;
        if (!variableName.startsWith('myPrefix')) {
          context.report({
            node,
            message: 'Variable name must start with "myPrefix".'
          });
        }
      }
    };
  }
};

export default myRyle;