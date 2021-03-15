const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index.bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}