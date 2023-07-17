module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier', 'eslint-comments'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "semi": false,
        "trailingComma": "all",
        "bracketSpacing": true,
        "printWidth": 100,
        "endOfLine": "auto"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off"
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"]
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};