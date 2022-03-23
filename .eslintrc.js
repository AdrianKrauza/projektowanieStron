module.exports = {
    // parser: '@typescript-eslint/parser',
    // "extends": "standard",
    ignorePatterns: ['temp.js', '**/vendor/*.jsx'],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    rules: {
        "semi": 2,
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
