const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: 'CodexMusic',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          /node_modules/,
          '/example/'
        ],
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  }
};
