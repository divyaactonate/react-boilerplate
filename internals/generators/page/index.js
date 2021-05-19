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

    actions.push({
      type: 'add',
      templateFile: './page/index.tsx.hbs',
      path: '../../src/pages/{{pascalCase name}}/index.tsx',
      abortOnFail: true,
    });
    // actions.push({
    //   type: 'prettify',
    //   path: '/pages/',
    // });
    return actions;
  },
};
