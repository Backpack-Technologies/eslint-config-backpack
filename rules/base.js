module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      generators: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
  }
};
