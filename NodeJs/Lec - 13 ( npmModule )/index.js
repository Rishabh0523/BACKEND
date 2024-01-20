const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.blue.underline.inverse("false"));  

const res = validator.isEmail("Technical@thapa.com");
console.log(res ? chalk.green.inverse(res) : chalk.foregroundColorNames.inverse(res))
console.log(res);