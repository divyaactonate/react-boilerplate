const webpack = require('webpack');
const paths = require('./paths');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[id].[chunkhash].js',
    path: paths.outputPath,
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new Dotenv({ path: paths.prodEnvPath }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('kaushal'),
    }),
  ],
  optimization: {
    emitOnErrors: true,
    // minimizer: [() => ({ terserOptions: { mangle: false } })],
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({ terserOptions: { compress: {} } }).apply(compiler);
      },
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    runtimeChunk: true,
  },
};
