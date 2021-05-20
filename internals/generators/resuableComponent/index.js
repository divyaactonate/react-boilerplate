/**
 * Shared Component Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new Reusable React components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = `${constants.root}shared/`;
    console.log(`${pathToWrite}{{pascalCase name}}/index.tsx`);
    actions.push(
      {
        type: 'add',
        templateFile: './resuableComponent/index.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/index.tsx`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './resuableComponent/test.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './resuableComponent/index.stories.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
        abortOnFail: true,
      }
    );
    actions.push({
      type: 'prettify',
      path: '/shared/',
    });
    return actions;
  },
};
