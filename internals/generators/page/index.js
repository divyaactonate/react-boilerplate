/**
 * Page Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new react page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your page name?',
    },
    {
      type: 'input',
      name: 'component',
      default: 'ComponentName',
      message: 'What is your Component Name to be called?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = `${constants.root}pages/`;

    actions.push({
      type: 'add',
      templateFile: './page/index.tsx.hbs',
      path: `${pathToWrite}{{camelCase name}}/index.tsx`,
      abortOnFail: true,
    });
    actions.push({
      type: 'prettify',
      path: '/pages/',
    });
    return actions;
  },
};
