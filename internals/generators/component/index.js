module.exports = {
  description: 'Creating new react components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
    {
      type: 'confirm',
      default: true,
      name: 'wantTests',
      message: 'Do you want test cases ?',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'input',
      name: 'path',
      default: 'components/',
      message: 'Enter path :',
    },
  ],
  actions: function (data) {
    const actions = [];
    const root = '../../src/';
    const pathToWrite = `${root}${data.path}`;
    console.log(pathToWrite);
    actions.push({
      type: 'add',
      templateFile: './component/index.tsx.hbs',
      path: `${pathToWrite}{{pascalCase name}}/index.tsx`,
      abortOnFail: true,
    });

    if (data.wantTests) {
      actions.push({
        type: 'add',
        templateFile: './component/test.tsx.hbs',
        path: `${pathToWrite}{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        abortOnFail: true,
      });
    }
    // actions.push({
    //   type: 'prettify',
    //   path: '/components/',
    // });
    return actions;
  },
};
