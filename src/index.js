#!/usr/bin/env node

import chalk from 'chalk';
import defaultCommand from './commands/default';
import cleanCommand from './commands/clean';
import resetCommand from './commands/reset';
import helpCommand from './commands/help';

switch (process.argv[2]) {
  case 'help':
    helpCommand();
    break;
  case 'reset':
    resetCommand();
    break;
  case 'clean':
    cleanCommand();
    break;
  case undefined:
    defaultCommand();
    break;
  default:
    console.log(chalk.red(`Unknown command argument "${process.argv[2]}". Please try again, or use argument "help" for more info.`));
}
