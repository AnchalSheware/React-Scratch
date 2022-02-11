const path = require('path');
const HtmlPlugin = require("html-webpack-plugin")
const MinicssExtractPlugin = require("mini-css-extract-plugin")

module.exports =  {
    mode : "development",
    output : {
        path: path.resolve(__dirname , "build"),
        filename : "bundle.js"
    },
   module : {
       rules : [
           {
               test : /\.(js|jsx)$/,
               exclude : /node_modules/,
               use : [
                  {
                      loader : "babel-loader"
                  }

               ]

           },
           {
               test : /\.html$/,
               use : {
                   loader : "html-loader"
               }
           },
           {
               test : /\.(png|jpe?g|gif)$/i,
               use : {
                   loader : "file-loader"
               }
           },
           {
               test : /\.s[ac]ss$/i,
               use:  [ MinicssExtractPlugin , "css-loader" , "sass-loader"] 
             }
           
       ]
   },

   plugins : [
       new HtmlPlugin(
           {
               filename : "index.html",
               
               template : "./src/index.html"
           }),
        new MinicssExtractPlugin()
       
   ] ,
   devServer : {
       historyApiFallback : true,
       port : 5000

   }
}