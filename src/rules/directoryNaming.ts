import { Rule } from 'eslint';
import { relative, parse, sep } from 'path';
import { isKebabCase } from '../helpers/casing';

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
              message: `"${projectRoot} -- ${relativePath}" - Directory name "${part}" should be in kebab-case.`
            });
          }
        }
      }
    };
  }
};

export default directoryNamingRule;
