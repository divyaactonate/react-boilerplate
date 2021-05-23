/**
 * Library Core Component Generator
 */

const constants = require('../constants');
const lengthValidator = require('../utils/lengthValidator');

module.exports = {
  description: 'Creating new Library Core component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
      validate: (value) => {
        const maxLength = 15;
        if (/.+/.test(value)) {
          return lengthValidator(value, maxLength)
            ? `A component name length is greater than maxLength- ${maxLength}`
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: function () {
    const actions = [];
    const pathToWrite = `${constants.root}library/core/`;
    console.log(`${pathToWrite}{{pascalCase name}}/index.tsx`);
    actions.push(
      {
        type: 'add',
        templateFile: './libraryCore/index.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/index.tsx`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './libraryCore/test.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './libraryCore/index.stories.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './libraryCore/index.styles.ts.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.styles.ts`,
        abortOnFail: true,
      }
    );
    actions.push({
      type: 'prettify',
      path: '/library/core/',
    });
    return actions;
  },
};
