const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('../paths');

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
  ],
};
