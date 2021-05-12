const path = require('path')

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '..', './build'),
  tsConfigPath: path.resolve(__dirname, '..', './tsconfig.json'),
  devEnvPath: './env/.env.development',
  prodEnvPath: './env/.env.production',
  entryPath: path.resolve(__dirname, '..', './src/index.tsx'),
  templatePath: path.resolve(__dirname, '..', './src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
}
