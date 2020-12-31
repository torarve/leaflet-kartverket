const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/index.css',
        './node_modules/leaflet/dist/leaflet.css'
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        usedExports: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.png$/i,
                use: [ 'file-loader' ],
            }
        ],
    },
};