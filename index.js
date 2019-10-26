module.exports = {
    root : true,
    env : {
        node : true,
    },
    extends : [
        'plugin:vue/recommended',
        '@vue/airbnb',
        '@vue/typescript',
    ],
    rules : {
        'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent : ['error', 4],
        semi : ['error', 'never'],
        'space-before-function-paren' : ['error', 'always'],
        'vue/html-indent' : ['error', 4, {
            attribute : 1,
            baseIndent : 1,
            closeBracket : 0,
            alignAttributesVertically : true,
            ignores : [],
        }],
        'import/extensions' : 'off',
        'class-methods-use-this' : 0,
        'no-param-reassign' : 'off',
        'vue/html-self-closing' : ['error', {
            html : {
                void : 'any',
                normal : 'any',
                component : 'always',
            },
            svg : 'always',
            math : 'always',
        }],
        'vue/no-v-html' : 'off',
        'max-len' : ['error', {code : 200}],
        'padded-blocks' : ['error', {classes : 'always'}],
        'key-spacing' : ['error', {afterColon : true, beforeColon : true}],
        'import/no-extraneous-dependencies' : 'off',
        'import/prefer-default-export' : 'off'
    },
    parserOptions : {
        parser : '@typescript-eslint/parser',
    },
    'overrides' : [
        {
            'files' : ['*.vue'],
            'rules' : {
                'indent' : 'off'
            }
        }
    ]
}
