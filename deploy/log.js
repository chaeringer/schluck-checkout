const chalk = require('chalk');

module.exports = (msg, color = 'cyan') => {
  console.log(chalk.bold[color](msg));
};
