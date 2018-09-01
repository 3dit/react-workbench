/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/' // necessary for react-dom-router
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true, // necessary for react-dom-router
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}