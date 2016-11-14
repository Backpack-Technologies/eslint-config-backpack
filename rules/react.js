module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['warn', {'location': 'tag-aligned'}],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': ['error'],

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': ['error'],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'off',

    // Prevent usage of isMounted
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['error', { ignore: [], customValidators: [] }],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true
    }],

    // Enforce spacing around jsx equals signs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: []
    }],

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Require render() methods to return something
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': false
    }],

    // Enforce spaces before the closing bracket of self-closing JSX elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': ['error', 'always'],

    // Require style prop value be an object or var
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error'
  }
};
