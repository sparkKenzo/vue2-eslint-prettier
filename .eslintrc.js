module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'always'],
    camelcase: 'off',
    eqeqeq: 'off',
    'no-trailing-spaces': [
      'warn',
      { skipBlankLines: true, ignoreComments: true }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': ['error', { caughtErrors: 'none', args: 'after-used' }],
    'object-curly-spacing': ['error', 'always'],
    'max-len': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  }
};
