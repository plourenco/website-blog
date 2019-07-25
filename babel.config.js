module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/transform-runtime',
        '@babel/syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
    ],
    env: {
        test: {
            plugins: ['dynamic-import-node']
        }
    }
};
