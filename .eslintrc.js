module.exports = {
    // parser: '@typescript-eslint/parser',
    // "extends": "standard",
    "parser": "babel-eslint",
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/no-children-prop': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
