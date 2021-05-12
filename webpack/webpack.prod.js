const webpack = require('webpack')
const paths = require('./paths');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({ path: paths.prodEnvPath, }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('kaushal'),
    }),
  ],
}
