const fs = require('fs')
const path = require('path')
const dotEnv = require('dotenv')
const dotEnvExpand = require('dotenv-expand')

function loadEnv() {
  const modePrefix = '--'
  const envPrefix = 'WS_'
  let mode = process.argv.slice(process.argv.length - 1)[0]
  if (mode && mode.startsWith && mode.startsWith(modePrefix)) {
    mode = mode.replace(modePrefix, '')
  }

  const env = {}
  const envFiles = [`.env.${mode}`]
  for (const file of envFiles) {
    const hasPath = fs.existsSync(path.resolve(process.cwd(), file))
    if (hasPath) {
      const parsed = dotEnv.parse(fs.readFileSync(file))

      dotEnvExpand({
        parsed
      })

      for (const [key, value] of Object.entries(parsed)) {
        if (key.startsWith(envPrefix) && env[key] === undefined) {
          env[key] = value
        }
      }
    }
  }
  return env
}

module.exports = loadEnv
