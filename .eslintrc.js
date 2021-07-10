module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['import', '@typescript-eslint', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.ts', '.jsx', '.tsx'] }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/order': 'warn',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: null,
        filter: {
          match: true,
          regex: '^[veles_|__]',
        },
      },
    ],
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/object-curly-spacing': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: [
    '**/*stories.tsx',
    'static/scripts',
    'build',
    'node_modules',
    '.eslintrc.js',
    'webpack.config.js',
    'jest.config.js',
  ],
}
