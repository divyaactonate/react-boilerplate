const webpack = require('webpack');
const paths = require('./paths');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'js/[name].[chunkhash].js',
    sourceMapFilename: 'source/[name].[chunkhash].map',
    chunkFilename: 'chunk/[id].[chunkhash].js',
    path: paths.outputPath,
    // publicPath: '/',
    // publicPath: paths.assetPath,
    // publicPath: '../../',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    // new CopyWebpackPlugin({ patterns: [{ from: paths.assetPath, to: 'public' }] }),
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
