module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'lodash',
    'eslint-plugin-jest',
    'eslint-plugin-no-inline-styles',
    'extra-rules',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:lodash/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'no-restricted-imports': [
      'error',
      { name: 'query-string', message: 'Please use qs instead.' },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '*.css', group: 'index', position: 'before' },
          { pattern: '*.scss', group: 'index', position: 'before' },
          {
            pattern: '@asset/**',
            group: 'parent',
            position: 'before',
          },
          { pattern: '@lib/**', group: 'parent', position: 'before' },
          { pattern: '@store/**', group: 'parent', position: 'before' },
          { pattern: '@util/**', group: 'parent', position: 'before' },
          { pattern: '@constant/**', group: 'parent' },
        ],
        groups: [
          'builtin',
          'external',
          'index',
          'parent',
          ['internal', 'sibling'],
        ],
      },
    ],
    'require-await': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-shadow': 'error',
    'object-shorthand': 'error',
    'no-nested-ternary': 'error',
    'no-dupe-else-if': 'error',
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'no-console': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/chaining': ['error', 'implicit'],
    'lodash/matches-shorthand': 'off',
    'lodash/matches-prop-shorthand': 'off',
    'lodash/prop-shorthand': 'off',
    'lodash/prefer-invoke-map': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-noop': 'off',
    'extra-rules/no-commented-out-code': 'error',
    'no-inline-styles/no-inline-styles': 1,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['@lib', './src/lib'],
          ['@store', './src/store'],
          ['@util', './src/util'],
          ['@constant', './src/constant'],
          ['@asset', './src/asset'],
          // Unit Test
          ['@unit', './unit/'],
        ],
      },
    },
  },
}
