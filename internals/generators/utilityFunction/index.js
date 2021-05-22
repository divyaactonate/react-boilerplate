/**
 * Shared Component Generator
 */

const constants = require('../constants');

module.exports = {
  description: 'Creating new Util',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your util name?',
    },
    {
      type: 'list',
      name: 'path',
      default: 'utils/',
      choices: ['utils/', 'library/utils/', 'library/theme/utils/'],
      message: 'Choose the path :',
    },
  ],
  actions: function (data) {
    const actions = [];
    console.log();
    const pathToWrite = `${constants.root}${data.path}`;
    console.log(`${pathToWrite}{{kebabCase name}}/index.tsx`);
    actions.push(
      {
        type: 'add',
        templateFile: './utilityFunction/index.ts.hbs',
        path: `${pathToWrite}{{kebabCase name}}/{{kebabCase name}}.ts`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './utilityFunction/test.ts.hbs',
        path: `${pathToWrite}{{kebabCase name}}/{{kebabCase name}}.test.ts`,
        abortOnFail: true,
      }
    );
    actions.push({
      type: 'prettify',
      path: `/${data.path}`,
    });
    return actions;
  },
};
