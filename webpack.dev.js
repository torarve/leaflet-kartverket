const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        // Uncomment to allow access from other machines
        // host: '0.0.0.0', 
    },
});