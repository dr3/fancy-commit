import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';
import * as githubEmoji from 'github-emoji';
import fs from 'fs';
import defaultUserConfig from '../config/defaultUserConfig';
import { externalConfigLocation } from '../config/settings';

const defaultCommand = () => {
  if (process.env.FANCY_DEBUG) {
    shell.exec = (...args) => {
      console.log(chalk.green(...args));
      return { code: 0 };
    };
  }

  let loadedConfig = {};

  try {
    loadedConfig = JSON.parse(fs.readFileSync(externalConfigLocation));
  } catch (e) {
    if (process.env.FANCY_DEBUG) {
      console.log(chalk.yellow(`Unable to find config at ${externalConfigLocation}`));
    }
  }

  const config = { ...defaultUserConfig, ...loadedConfig };

  const prompts = [
    {
      type: 'list',
      name: 'emoji',
      message: 'What commit type do you want?',
      choices: config.prompts.map(({ text, emoji }) => [text, emoji].join(' ')),
      filter: (val) => {
        const emoji = val.split(' ').slice(-1)[0];

        if (!emoji) {
          return '';
        }

        return config.useGithubEmoji ? `:${githubEmoji.nameOf(emoji)}: ` : `${emoji} `;
      },
    },
    {
      type: 'input',
      name: 'message',
      message: 'What commit message do you want?',
      default: () => 'Continue to add features/debug.',
    },
  ];

  const isAsk = val => val.includes('ask');
  const isAlways = val => val === 'always';
  const getDefault = val => val === 'ask_y' ? 'y' : 'n'; // eslint-disable-line no-confusing-arrow

  if (isAsk(config.skipVerifyingCommit)) {
    prompts.push({
      type: 'input',
      name: 'verify',
      message: 'Do you want to skip verifying?',
      default: () => getDefault(config.skipVerifyingCommit),
      filter: val => val.toLowerCase() === 'y',
    });
  }

  if (isAsk(config.allowEmptyCommit)) {
    prompts.push({
      type: 'input',
      name: 'empty',
      message: 'Do you want to allow an empty commit?',
      default: () => getDefault(config.allowEmptyCommit),
      filter: val => val.toLowerCase() === 'y',
    });
  }

  if (isAsk(config.signCommits)) {
    prompts.push({
      type: 'input',
      name: 'sign',
      message: 'Do you want to sign this commit?',
      default: () => getDefault(config.signCommits),
      filter: val => val.toLowerCase() === 'y',
    });
  } 

  const handleAnswers = (answers) => {
    const skipVerifyingCommit = answers.verify || isAlways(config.skipVerifyingCommit) ? ' --no-verify' : '';
    const allowEmptyCommit = answers.empty || isAlways(config.allowEmptyCommit) ? ' --allow-empty' : '';
    const signCommits = answers.sign || isAlways(config.signCommits) ? ' -S' : '';

    shell.exec(`git commit${signCommits} -m "${answers.emoji}${answers.message}"${skipVerifyingCommit}${allowEmptyCommit}`);
  };

  const precheck = () => {
    if (config.mustBeInsideWorkingTree && shell.exec('git rev-parse --is-inside-work-tree', { silent: true }).code !== 0) {
      console.log(chalk.red('Error: Not currently in a git repo!'));
      shell.exit(1);
    }

    if (config.warnNoChanges && shell.exec('git diff-index --quiet HEAD --', { silent: true }).code === 0) {
      console.log(chalk.red("\nPssst! btw there aren't any changes! 😱\n"));
    }

    return true;
  };

  if (precheck()) {
    inquirer.prompt(prompts).then(handleAnswers);
  }
};

export default defaultCommand;
