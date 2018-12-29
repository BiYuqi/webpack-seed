// Generated on Sat Dec 08 2018 20:25:01 GMT+0800 (CST)
const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: path.resolve(__dirname),

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/@babel/polyfill/dist/polyfill.js',
      './test.config.js'
    ],

    browserConsoleLogOptions:{
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test.config.js': ['webpack', 'sourcemap', 'coverage']
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
      require('karma-chrome-launcher')
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // 设置此项 报错信息不提示
    // client: {
    //   captureConsole: true,
    //   mocha: {
    //     bail: true
    //   }
    // },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    // concurrency: Infinity,
    webpack: {
      mode: 'none',
      target: 'web',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.js'],
        alias: {
          '@': resolve('./src'),
          'utils': resolve('./src/utils')
        }
      }
    },
    webpackServer: {
      noInfo: true
    },
    // webpackMiddleware: {
    //   stats: 'errors-only'
    // }
  })
}
