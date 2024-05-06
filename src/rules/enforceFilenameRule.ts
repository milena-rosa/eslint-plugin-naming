import { Rule } from 'eslint';
import * as ESTree from 'estree';
import { isFilenameCamelCase, isFilenamePascalCase } from '../helpers/filename';

const enforceFilename: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Enforce PascalCase filenames for files exporting classes and camelCase filenames for all the other files.',
      category: 'Best Practices',
      recommended: false
    },
    messages: {
      withClassNoPascalCase: 'Files exporting a class should be PascalCase named.',
      noClassNoCamelCase: 'Files not exporting a class should be camelCase named.'
    },
    schema: []
  },
  create(context) {
    let classDeclarationFound = false;

    return {
      ClassDeclaration(node: ESTree.Node) {
        classDeclarationFound = true;
      },
      'Program:exit': (node: ESTree.Program) => {
        const { filename } = context;
        const validFilename = classDeclarationFound ? isFilenamePascalCase(filename) : isFilenameCamelCase(filename);

        if (!validFilename) {
          context.report({
            node,
            messageId: classDeclarationFound ? 'withClassNoPascalCase' : 'noClassNoCamelCase'
          });
        }
      }
    };
  }
};

export default enforceFilename;
