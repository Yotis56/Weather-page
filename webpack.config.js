const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase : true, 
    watchOptions: {
      poll: true,
    },
  }, 
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'weather APP',
  //     template: './public/index.html',
  //     filename: './index.html'
  //   })
  // ]
};