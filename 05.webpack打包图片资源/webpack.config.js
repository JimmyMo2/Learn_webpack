
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //webpack配置
  //入口
  entry: "./src/index.js",
  //输出
  output: {
    publicPath:'./',
    filename: "build.js",
    path: resolve(__dirname, "build"),
  },
  //loader的配置
  module: {
    rules: [
      //详细的loader的配置
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.(jpg|jpeg)$/,
        loader:'url-loader',
        options:{
          //图片大小小于8kb，就会被base64处理（8-12kb）
          //优点：减少请求数量（减少服务器压力），
          //缺点：图片体积会更大（文件请求速度更慢）
          limit:8*1024,
          esModule:false,
          name:'[hash:10].[ext]'
        }
      },
      {
        test:/\.html$/,
        //处理html文件的img图片，（负责引入img，从而能被url-loader进行处理）
        loader:'html-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],

  mode: "development",
};
