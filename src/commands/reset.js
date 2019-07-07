import chalk from 'chalk';
import fs from 'fs';
import { externalConfigLocation } from '../config/settings';
import defaultUserConfig from '../config/defaultUserConfig';

const resetCommand = () => {
  try {
    const json = JSON.stringify(defaultUserConfig, null, 2);
    const exists = fs.existsSync(externalConfigLocation);

    fs.writeFileSync(externalConfigLocation, json, 'utf8');

    console.log(chalk.green(`Successfully ${exists ? 'reset' : 'wrote'} config file ${externalConfigLocation}`));
  } catch (e) {
    console.log(chalk.red(`Unable to remove file ${externalConfigLocation}`), e);
  }
};

export default resetCommand;
