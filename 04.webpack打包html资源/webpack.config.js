/*
    webpack.config.js webpack的配置文件
       作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
*/

//resolve 用来拼接绝对路径的方法
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //webpack配置
  //入口
  entry: "./src/index.js",
  //输出
  output: {
    //输出文件名
    filename: "build.js",
    //输出路径
    //__dirname nodejs的变量，代表当前文件的目录的绝对路径
    path: resolve(__dirname, "build"),
  },
  //loader的配置
  module: {
    rules: [
      //详细的loader的配置
    ],
  },
  //plugins的配置
  plugins: [
    //详细的plugins的配置
    //html-webpack-plugin
    //功能：默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  //模式
  mode: "development",
  // mode:'production'
};
