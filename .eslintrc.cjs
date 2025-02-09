module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-underscore-dangle': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'no-lonely-if': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
      },
    ],
    //'vue/html-indent': 'error',
  },
};
