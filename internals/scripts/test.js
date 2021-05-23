#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const readline = require('readline');
const addCheckMark = require('./helpers/checkmark');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('close', () => {
  console.log(chalk.green('\nThanks for running tests !!!'));
  process.exit(0);
});

async function runTests() {
  const path = await new Promise((res) => {
    rl.question(chalk.blue('Where you test file is located? '), res);
  });
  const verbose = await new Promise((res) => {
    rl.question(chalk.blue('Enable Verbose? '), res);
  });

  const script = ['y', 'Y', 'yes', 'Yes'].includes(verbose)
    ? `npm run test --verbose -- ${path}`
    : `npm run test  -- ${path}`;
  shelljs.exec(
    script + ' --color=always',
    addCheckMark.bind(null, () => {
      rl.close();
    })
  );
}

runTests();
