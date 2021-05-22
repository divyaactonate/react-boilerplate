/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const sharedComponentGenerator = require('./resuableComponent/index.js');
const pageGenerator = require('./page/index.js');
const storeGenerator = require('./store/index.js');
const serviceGenerator = require('./service/index.js');
const coreGenerator = require('./libraryCore/index.js');
const utilGenerator = require('./utilityFunction/index.js');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = function (plop) {
  plop.setGenerator('reusable', sharedComponentGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('service', serviceGenerator);
  plop.setGenerator('core', coreGenerator);
  plop.setGenerator('utils', utilGenerator);

  plop.setActionType('prettify', (answers, config) => {
    let fileName;
    if (config.path === '/api/') {
      fileName = plop.getHelper('camelCase')(answers.name) + 'Api';
    } else if (config.path === '/store/') {
      fileName = plop.getHelper('camelCase')(answers.name) + '.ts';
    } else if (config.path === '/pages/') {
      fileName = plop.getHelper('camelCase')(answers.name);
    } else if (config.path.includes('utils')) {
      fileName = plop.getHelper('kebabCase')(answers.name);
    } else {
      fileName = plop.getHelper('properCase')(answers.name);
    }
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,
      fileName
      // '**',
      // '**.{js,jsx,ts,tsx,json,css,scss,md}'
    )}`;
    try {
      execSync(`npm run prettier -- "${folderPath}\"`);
      return folderPath;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  plop.setActionType('addStore', (answers, config) => {
    const folderPath = `${path.join(__dirname, '/../../src/', config.path)}index.ts`;
    try {
      let content = fs.readFileSync(folderPath, 'utf8');
      console.log(content);
      return folderPath;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
