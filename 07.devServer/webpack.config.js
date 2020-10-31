const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "./",
    filename: "build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //打包其他资源（除了html/js/css资源以外的资源）
      {
        //排除css/js/html资源
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader',
        options:{
          name:'[hash:10].[ext]'
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  mode: "development",
  //开发服务器devServer,用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
  //特点：自会在内存中打包编译，不会有任何输出
  //启动devServer指令为：webpack_dev_server(webpack5为npx webpack serve)
  devServer:{
    contentBase:resolve(__dirname,'build'),
    //启动gzip压缩
    compress:true,
    //端口号
    port:'3000',
    open:true
  }
};
