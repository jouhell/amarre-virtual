const { compilerOptions } = require('./jsconfig.json')

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: compilerOptions.paths,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        ssr: true,
      },
    ],
  ],
  presets: ['next/babel'],
}
