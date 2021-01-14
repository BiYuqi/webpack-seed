module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'ios >= 7', 'not ie <= 8']
        },
        useBuiltIns: 'usage',
        corejs: 2
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-optional-chaining']
}
