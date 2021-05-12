const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: paths.entryPath,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
  output: {
    path: paths.outputPath,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.templatePath
    }),
  ],
  stats: 'errors-only',
}
