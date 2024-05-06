import { Rule } from 'eslint';
import path from 'path';
import { isKebabCase } from '../helpers/casing';

const directoryNamingRule: Rule.RuleModule = {
  create(context) {
    return {
      Program: (node) => {
        const { filename, cwd } = context;
        const directoryPath = path.dirname(filename).replace(cwd, '');

        // Split the directory path to check each part
        const parts = directoryPath.split(path.sep);
        for (const part of parts) {
          if (part && !isKebabCase(part)) {
            context.report({
              node,
              message: `Directory name "${part}" should be in kebab-case.`
            });
          }
        }
      }
    };
  }
};

export default directoryNamingRule;
