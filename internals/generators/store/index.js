/**
 * Store Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new mobx store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your store name?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = constants.root;

    actions.push({
      type: 'add',
      templateFile: './store/index.ts.hbs',
      path: `${pathToWrite}store/{{camelCase name}}.ts`,
      abortOnFail: true,
    });
    actions.push({
      type: 'prettify',
      path: '/store/',
    });
    return actions;
  },
};
