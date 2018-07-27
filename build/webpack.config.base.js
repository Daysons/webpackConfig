const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const config = {
    mode: "development",
    entry: path.join(__dirname, "../client/index.js"),
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "../dist"),
      publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                use: "eslint-loader",
                exclude: /node_modules/,
                enforce: "pre"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",

            },
            {
                test: /\.(png|jpe?g|gif|svg|bmp)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            name: "[path][name].[hash:8].[ext]"
                        }

                    }
                ]
            }
        ]
    },
    optimization: {

        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    name: "vendor"
                }
            }
        },
        runtimeChunk: {
            name: "manifest"
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
module.exports = config
