#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');

const typeKVP = {
  'None': '',
  'Feature 🚀': ':rocket:',
  'Bug Fix 🔧': ':wrench:',
  'Documentation 📝': ':pencil:',
  'Style/Clean up 🛀': ':bath:',
  'Tests ✅': ':white_check_mark:',
  'Revert 😵': ':astonished:',
  'Code Review 🕺': ':dancer:',
  'Fun 🎉': ':tada:'
}

const prompts = [
  {
    type: 'list',
    name: 'emoji',
    message: 'What commit type do you want?',
    choices: Object.keys(typeKVP),
    filter: val => typeKVP[val] + ' '
  },
  {
    type: 'input',
    name: 'message',
    message: "What commit message do you want?",
    default: () => 'Continue to add features/debug.'
  },
  {
    type: 'input',
    name: 'verify',
    message: "Do you want to skip verifying?",
    default: () => 'n',
    filter: val => val.toLowerCase() === 'y' ? ' --no-verify' : ''
  },
  {
    type: 'input',
    name: 'empty',
    message: "Do you want to allow an empty commit?",
    default: () => 'n',
    filter: val => val.toLowerCase() === 'y' ? ' --allow-empty' : ''
  }
];

const handleAnswers = answers => {
  shell.exec(`git commit -S -m "${answers.emoji}${answers.message}"${answers.verify}${answers.empty}`)
};

const precheck = () => {
  if (shell.exec('git rev-parse --is-inside-work-tree', {silent:true}).code !== 0) {
    console.log(chalk.red('Error: Not currently in a git repo!'));
    shell.exit(1);
  }

  if (shell.exec('git diff-index --quiet HEAD --', {silent:true}).code === 0) {
    console.log(chalk.red("\nPssst! btw there aren't any changes! 😱\n"));
  }

  return true;
}

if(precheck()){
  inquirer.prompt(prompts).then(handleAnswers);
}
