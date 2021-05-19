const path = require('path');

const root = path.resolve(__dirname, '../../');
const configPahs = {
  outputPath: path.resolve(root, './dist'),
  tsConfigPath: path.resolve(root, './tsconfig.json'),
  devEnvPath: path.resolve(root, './env/.env.development'),
  prodEnvPath: path.resolve(root, './env/.env.production'),
  entryPath: path.resolve(root, './src/index.tsx'),
  templatePath: path.resolve(root, './src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
module.exports = configPahs;
