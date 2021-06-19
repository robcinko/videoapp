const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      app: './src/index.js'
   },
   module:{
      rules: [
         {test: /\.(js|jsx)$/, use:['babel-loader']},
         {test: /\.(css)$/, use:["style-loader", "css-loader"]}
      ]
   },
   plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title:"VideoLibrary",
         template: "./src/template.ejs",
         filename: "movie.html",
         chunks: ["app"]
      })

   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
   },

   devtool: 'inline-source-map'

}