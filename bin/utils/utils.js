const chalk = require('chalk')
const { getDirectoryName } = require('./getdirname')

const mkdir = () => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

const getFileName = name => {
  const result = name.split('/')
  const directory = result.slice(0, result.length - 1)
  const fileName = result.slice(-1)
  return {
    directory,
    fileName
  }
}

const log = message => console.log(chalk.green(`${message}`))

const successLog = message => console.log(chalk.magentaBright(`${message}`))

const errorLog = error => console.log(chalk.red(`${error}`))

module.exports = {
  mkdir,
  getFileName,
  getDirectoryName,
  log,
  successLog,
  errorLog
}
