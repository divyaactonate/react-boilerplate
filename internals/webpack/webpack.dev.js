const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('../paths');
const CircularDependencyPlugin = require('circular-dependency-plugin');
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // before: (app) => {
    //   app.use('/', express.static(path.join(__dirname, 'public')));
    // },
    contentBase: paths.assetPath,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new Dotenv({ path: paths.devEnvPath }),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Kaushal'),
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
};
