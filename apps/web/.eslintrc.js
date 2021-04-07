module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: [],
    extends: [
          'airbnb-typescript',          
          'plugin:react-hooks/recommended',
          'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    env: {
          jest: true,
      },      
    rules: {},
  };