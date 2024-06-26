module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'node/no-unpublished-require': [
      'warn',
      {
        allowModules: ['electron', 'electron-builder'],
      },
    ],
  },
}
