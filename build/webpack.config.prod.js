const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = merge(baseConfig,{
    mode: "production",
    module: {
      rules: [
        {
          test: /\.less/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "style.[contenthash:8].css"
      })
    ]
})
module.exports = config
