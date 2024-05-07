import { Rule } from 'eslint';
import { relative, parse, sep } from 'path';
import { isKebabCase, toKebabCase } from '../helpers/casing';

const directoryNamingRule: Rule.RuleModule = {
  create(context) {
    const projectRoot = process.cwd();

    return {
      Program: (node) => {
        const { filename } = context;
        if (filename === '<input>' || filename === '<text>') {
          // Skip virtual filenames used by ESLint in editor integrations
          return;
        }

        const relativePath = parse(relative(projectRoot, filename)).dir;
        // Split the directory path to check each part
        const parts = relativePath.split(sep);
        for (const part of parts) {
          if (part && !isKebabCase(part)) {
            context.report({
              node,
              message: `Directory name "${part}" is not in kebab-case. Change it to "${toKebabCase(part)}".`,
              loc: { line: 0, column: 0 }
            });
          }
        }
      }
    };
  }
};

export default directoryNamingRule;
