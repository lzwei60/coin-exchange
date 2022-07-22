const { defineConfig } = require('@vue/cli-service');
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',  // 打包位置
  assetsDir: 'assets',  // 静态资源目录
  lintOnSave: false, // 这里禁止使用elint-loader
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  chainWebpack: config => {
    //路径配置
    config.resolve.alias
      .set("@", path.join(__dirname, "./src"))
  },
  devServer: {
    open: false, // 自动打开
    port: 8282, // 设置端口
    // proxy: {
    //   '/api': {
    //     // target: 'http://192.168.0.237:41173/jxsoft', 
    //     target: 'https://c.m.163.com', 
    //     ws: false,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
    proxy: {
      '/api': {
        target: 'https://c.m.163.com', 
        //target: 'http://192.168.0.237:41173/jxsoft', 
        ws: false,
        changeOrigin: true,
        pathRewrite:{ '^/api':'' },
        rewrite: (path) => path.replace(/^\/api/, '')

      }
    }
  }
})
