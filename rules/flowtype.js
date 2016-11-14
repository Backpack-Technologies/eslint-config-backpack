module.exports = {
  plugins: [
    'flowtype'
  ],
  rules: {
    // Marks Flow type identifiers as defined.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 'error',

    // This rule validates Flow file annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'error',

    // Marks Flow type alias declarations as used.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 'warn'
  }
};
