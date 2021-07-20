const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./src/config');
const CopyPlugin = require("copy-webpack-plugin");

const webpackConfig = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.scss$/,
              use: [
                    "style-loader",
                    {
                      loader:  "css-loader?modules"
                    },
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: config.title,
            filename: 'index.html',
            template: __dirname + '/src/html.ejs',
        }),
    ],
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        webpackConfig.mode = 'development';
        webpackConfig.devtool = 'source-map';
        webpackConfig.devServer = {
            historyApiFallback: {
            disableDotRule: true,
            },
            compress: true,
            port: 3000,    
        };

        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
            __isBrowser__: "true",
            __DEVELOPMENT__: "true"
            })
        )
    }
  
    if (argv.mode === 'production') {
        webpackConfig.mode = 'production';
        webpackConfig.plugins.push(new CopyPlugin({
            patterns: [
              { from: "static", to: "static" }
            ],
          }))

          webpackConfig.plugins.push(
              new webpack.DefinePlugin({
              __isBrowser__: "true",
              __DEVELOPMENT__: "false"
              })
          )
    }
  
    return webpackConfig;
  };