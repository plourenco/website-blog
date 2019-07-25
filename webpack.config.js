const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './js/main.js']
    },
    context: path.join(__dirname, 'src'),
    devtool: debug && 'inline-sourcemap',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', '@babel/env'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]

            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.svg$/,
                use: ['svg-url-loader']
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|otf|svg|gif)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/js/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            node_modules: path.resolve(__dirname, 'node_modules/')
        },
        extensions: ['.css', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/src/',
        publicPath: '',
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        /*runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        }*/
    }
};
