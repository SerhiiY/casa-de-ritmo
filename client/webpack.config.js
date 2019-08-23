// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: ["babel-loader"] 
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/, 
          loader: 'file-loader',
          options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
          }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        exclude: /node_modules/, 
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 
          {loader: MiniCssExtractPlugin.loader}, 
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, 
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/, 
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}