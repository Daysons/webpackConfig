const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const devServer = {
    port: 8080,
    host: "0.0.0.0",
    overlay: {
        errors: true
    },
    hot: true,
};

const config = merge(baseConfig,{
    mode: "development",
    module: {
      rules: [
        {
          test: /\.less/,
          use: ["vue-style-loader", "css-loader", "less-loader"]
        },
      ]
    },
    devServer,
    plugins: [
        new HtmlWebpackPlugin({
            template: "../webpackConfig/client/template.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
})
module.exports = config
