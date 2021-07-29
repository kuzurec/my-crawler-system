module.exports = {
  plugins: ['@emotion'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: 'babel-eslint',
      extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended'],
      plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'jsdoc']
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended'
      ],
      plugins: ['@typescript-eslint', 'typescript', 'react', 'react-hooks', 'import', 'jsx-a11y', 'jsdoc'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/indent': ['error', 2],
        'react/jsx-indent': ['error', 2],
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/prefer-interface': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        'object-curly-spacing': 0,
        '@typescript-eslint/no-var-requires': 0,
        indent: ['error', 2]
      }
    }
  ],

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // Best Practices
    'array-callback-return': ['error', { allowImplicit: true }]
  }
};
