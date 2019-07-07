import chalk from 'chalk';
import fs from 'fs';
import { externalConfigLocation } from '../config/settings';

const cleanCommand = () => {
  try {
    if (fs.existsSync(externalConfigLocation)) {
      fs.unlinkSync(externalConfigLocation);
      console.log(chalk.green(`Successfully removed config file ${externalConfigLocation}`));
    } else {
      console.log(chalk.blue(`Unable to delete config file ${externalConfigLocation} as it does not exist.`));
    }
  } catch (e) {
    console.log(chalk.red(`Unable to remove file ${externalConfigLocation}`), e);
  }
};

export default cleanCommand;
