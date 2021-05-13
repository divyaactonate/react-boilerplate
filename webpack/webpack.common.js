const paths = require('./paths');
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
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        // options: {
        //   outputPath: paths.imagesFolder,
        // },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        // options: {
        //   outputPath: paths.fontsFolder,
        // },
      },
    ],
  },
  output: {
    path: paths.outputPath,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.templatePath,
    }),
  ],
  stats: 'errors-only',
};
