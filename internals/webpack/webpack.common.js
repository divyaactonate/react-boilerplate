const paths = require('../paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: paths.entryPath,
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: paths.tsConfigPath })],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', 'scss', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  // output: {
  //   path: paths.outputPath,
  //   // filename: 'bundle.js',
  //   filename: 'js/[name].[contenthash].bundle.js',
  //   // publicPath: paths.assetPath,
  //   publicPath: '/public/',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BI HUB 3.0',
      favicon: paths.favIconPath,
      template: paths.templatePath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  stats: 'errors-only',
};
