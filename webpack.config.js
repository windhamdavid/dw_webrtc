const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    library: 'SimpleWebRTC',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: 'head',
      title: process.env.META_TITLE,
      environment: {
        talky: process.env.TALKY_API_KEY,
        url: process.env.URL,
        desc: process.env.META_DESC,
        img: process.env.META_IMG
      }
    }),
//    new CopyPlugin([
//      {from:'public/style.css',to:'style.css'}, 
//      {from:'public/chat.png',to:'chat.png'}, 
//    ]), 
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled'
    })
  ]
};
