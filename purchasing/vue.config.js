const path = require('path');
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})


// 使用等比适配插件
module.exports = {
  lintOnSave: true,
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  // 输出文件目录
  outputDir: 'dist3',
  publicPath: './'
}