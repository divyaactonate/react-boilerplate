const path = require('path');

const root = path.resolve(__dirname, '../');
const configPahs = {
  root,
  storybookOutputPath: path.resolve(root, './storybook-static'),
  storybookOutputServePath: path.resolve(root, './storybook-static/index.html'),
  outputPath: path.resolve(root, './dist'),
  buildInfoPath: path.resolve(root, './buildInfo.json'),
  outputServePath: path.resolve(root, './dist/index.html'),
  tsConfigPath: path.resolve(root, './tsconfig.json'),
  esLintConfigPath: path.resolve(root, './.eslintrc.json'),
  devEnvPath: path.resolve(root, './env/.env.development'),
  prodEnvPath: path.resolve(root, './env/.env.production'),
  entryPath: path.resolve(root, './src/index.tsx'),
  assetPath: path.resolve(root, './public'),
  favIconPath: path.resolve(root, './public/favicon.ico'),
  templatePath: path.resolve(root, './src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
module.exports = configPahs;
