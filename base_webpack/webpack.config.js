const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test:/\.scss$/,
        use:['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      { 
        title: "mon appli",
        filename: "index.html",
        template: "./src/templates/index.html"
      }
      )
    ],
  devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      port: 9000,
    },
};