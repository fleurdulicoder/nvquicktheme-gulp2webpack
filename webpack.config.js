const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ImageminWebpackPlugin } = require('imagemin-webpack');
const ImageMinGifsicle = require('imagemin-gifsicle');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ImageminWebpackPlugin({
      imageminOptions: {
        bail: false,
        plugins: ImageMinGifsicle({
          interlaced: true,
          optimizationLevel: 5,
        }),
      },
    }),
    new CopyWebpackPlugin([
      { from: './img/**/*.{jpg,jpeg,png,gif}', to: '' },
    ]),
  ],
};
