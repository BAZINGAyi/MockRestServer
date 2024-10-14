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
      },
      
      // 匹配所有以 p_ 开头的路径，使用 Vue 自己的路由
      '/p_': {
              target: 'http://localhost:8080',  // 直接使用本地 Vue 项目处理
              // changeOrigin: false,  // 修改 origin，避免跨域
              // pathRewrite: { '^/p_': 'p_' }  // 去掉路径中的前缀
      },

      // // 匹配所有以 /static 开头的路径，使用本地静态资源
      // '/static': {
      //   target: 'http://localhost:8080',  // 直接使用本地 Vue 项目处理
      //   changeOrigin: true,  // 修改 origin，避免跨域
      //   // pathRewrite: { '^/static': 'static' }  // 去掉路径中的前缀
      // },

      '/\\w{6,}': {
        target: 'http://localhost:3000',  // 代理到 localhost:3000
        changeOrigin: true,               // 更改源，避免跨域问题
      }

      },


    
  }
};