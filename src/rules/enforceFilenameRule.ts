import { Rule } from 'eslint';
import path from 'node:path';
import * as ESTree from 'estree';
import { isFilenameCamelCase, isFilenamePascalCase } from '../helpers/filename';
import { toCamelCase, toPascalCase } from '../helpers/casing';

const enforceFilename: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Enforce PascalCase filenames for files exporting classes and camelCase filenames for all the other files.',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },
  create(context) {
    const { sourceCode, filename } = context;
    const fileBasename = path.basename(filename);
    let classDeclarationFound = sourceCode.text.includes('module.exports = class');
    const isTestFile = fileBasename.includes('.spec.') || fileBasename.includes('.test.');

    return {
      ClassDeclaration() {
        classDeclarationFound = true;
      },
      'Program:exit': (node: ESTree.Program) => {
        const { filename } = context;
        const { name } = path.parse(filename);
        const fileBasename = path.basename(filename);

        const validFilename =
          classDeclarationFound && !isTestFile ? isFilenamePascalCase(fileBasename) : isFilenameCamelCase(fileBasename);
        if (!validFilename) {
          context.report({
            node,
            message:
              classDeclarationFound && !isTestFile
                ? `Filename is not in PascalCase. Change it to "${toPascalCase(name)}".`
                : `Filename is not in camelCase. Change it to "${toCamelCase(name)}".`,
            loc: { line: 0, column: 0 }
          });
        }
      }
    };
  }
};

export default enforceFilename;
