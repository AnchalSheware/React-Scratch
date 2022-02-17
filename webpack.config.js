const path = require('path');
const HtmlPlugin = require("html-webpack-plugin")
const MinicssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }

                ]

            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: "file-loader"
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },

        ]
    },
    entry:[
        "./src/index.js"
    ],

    plugins: [
        new HtmlPlugin(
            {
                filename: "index.html",
                template: "./src/index.html"
            }),
        new MinicssExtractPlugin(),
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV" : JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 5000
    }
}