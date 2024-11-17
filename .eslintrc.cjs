module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
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
    //"linebreak-style" deprecated, use https://eslint.style/rules/js/linebreak-style insted
    'import/no-unresolved': 'off', //https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-1958791609
    // or instead of "import/resolver" push to "extends" "plugin:import/typescript"
    //"import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'prettier/prettier': 2,
  },
  //ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
};
