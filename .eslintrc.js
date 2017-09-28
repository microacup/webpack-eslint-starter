module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module"
    },
    rules: {
        "linebreak-style": 0,
        "jsx-a11y/href-no-hash": 0,
        "no-param-reassign": 0,
        "max-len": 0,
        "no-underscore-dangle": 0,
        "camelcase": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "class-methods-use-this": 0,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "BinaryExpression[operator='in']",
                "message": "cannot use for in."
            },
        ],
    }
};