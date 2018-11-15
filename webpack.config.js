const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react'],
              plugins: ["transform-object-rest-spread"]
            }
          }
        },
        {test: /.css$/, use: ['style-loader', 'css-loader']},
        {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
      ]
  },
  watch:true,
  mode: 'production'
};