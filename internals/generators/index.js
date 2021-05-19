const componentGenerator = require('./component/index.js');
const pageGenerator = require('./page/index.js');
const path = require('path');
const { execSync } = require('child_process');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**',
      '**.tsx'
    )}`;

    try {
      execSync(`npm run prettier -- "${folderPath}"`);
      console.log(folderPath);
      return folderPath;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
