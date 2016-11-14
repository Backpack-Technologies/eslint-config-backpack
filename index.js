module.exports = {
  extends: [
    'eslint-config-standard',
    'eslint-config-semistandard',
    './rules/base',
    './rules/flowtype',
    './rules/react',
    './rules/react-a11y',
    './rules/import'
  ].map(require.resolve),
  rules: {}
};
