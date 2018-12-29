/**
 * Match only javascript files end within '-test.js' or '/test'
 * Of course, you can define the rules by your self
 */
const BaseTestConfigPath = require.context('./src', true, /\-test.js$/)
const BaseTestDec = require.context('./test', true, /\-test.js$/)
BaseTestConfigPath.keys().forEach(BaseTestConfigPath)
BaseTestDec.keys().forEach(BaseTestDec)
