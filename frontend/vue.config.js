const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  // 设置打包后静态资源的前缀
  publicPath: '/static/',

  devServer: {
    proxy: {
      '/i_api': {
        target: 'http://localhost:3000', // 目标服务器地址
        changeOrigin: true, // 是否改变源
        pathRewrite: { '^/i_api': '/i_api' } // 重写路径
      }
    }
  }
};