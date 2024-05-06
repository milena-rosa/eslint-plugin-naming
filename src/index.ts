import enforceFilenameRule from './rules/enforceFilenameRule';
import directoryNamingRule from './rules/directoryNaming';

export = {
  rules: {
    'enforce-filename': enforceFilenameRule,
    'directory-naming': directoryNamingRule
  }
};
