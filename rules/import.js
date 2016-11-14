module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    // Doesn't recognises flowtype import
    'no-duplicate-imports': 'off',

    // Verifies that all named imports are part of the set of named exports in the referenced module.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'error',

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'error',

    // If a default import is requested, this rule will report if there is no default export in the imported module.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'error',

    // Reports funny business with exports, like repeated exports of names or defaults.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Reports if a resolved path is imported more than once.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error'
  }
};
