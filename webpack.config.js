const path = require('path')
module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
        rules: [
            {
        test: /\.js/,
        loader: 'babel-loader',
        include:  path.resolve(__dirname, '/src'),

            }
        ],
    }
  };