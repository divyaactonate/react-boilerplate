const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const paths = require('../paths');

const smp = new SpeedMeasurePlugin({
  compareLoadersBuild: {
    filePath: paths.buildInfoPath,
    outputFormat: 'humanVerbose',
  },
});

module.exports = (envVars) => {
  const { env, MEASURE } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return MEASURE ? smp.wrap(config) : config;
};
