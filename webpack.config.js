/* eslint-disable prettier/prettier */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: isProduction ? '[name].[contenthash].js' : '[main].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,

          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.URL_API': JSON.stringify(
          isProduction
            ? 'https://community-chat-api.vercel.app/graphql'
            : 'http://localhost:4000/graphql'
        ),
        'process.env.REACT_TWILIO_VIDEO': JSON.stringify(
          isProduction
            ? 'https://community-chat-api.vercel.app/video/token'
            : 'http://localhost:4000/video/token'
        ),
      }),
      new Dotenv({
        systemvars: true,
      }),
      new CompressionPlugin(),
      new BundleAnalyzerPlugin(),
    ],
    devServer: {
      open: true,
      client: {
        overlay: true,
      },
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      historyApiFallback: true,
      port: 3100,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: false,
        },
      },
    },
  }
}
