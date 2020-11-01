module.exports = {
 /**
  * 指定生成的 index.html 的输出路径 (相对于 outputDir)
  * 默认：'index.html'
  */
 // indexPath:"html/test.html",
 /**
  * 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  * 例如：true==>app.e2713bb0.css        false==>app.css
  * 默认:true
  */
 filenameHashing:true,

 pages:undefined,
 lintOnSave:true,
 transpileDependencies:[],

 /**
  * 是否生成.map文件
  * 默认：true
  * 开发环境设置为false加速开发
  * 发布环境设置为true
  * .map文件作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
  */
 productionSourceMap:false,

 /**
  * 设置生成的 HTML 中 <link> 和 <script> 标签的 crossorigin 属性
  * 默认：undefined
  */
 crossorigin:undefined,

 /**
  * 在生成的 HTML 中的 <link> 和 <script> 标签上启用 Subresource Integrity (SRI)
  * 默认：false
  */
 // chainWebpack:{},
 // devServer:{
 //     proxy:{}
 // },
 // parallel:require('os').cpus().length > 1,
 // pwa:{},
 // pluginOptions:{}
 //  configureWebpack: {
 //      resolve: {
 //          //自定义路径别名
 //          alias: {
 //              'assets': '@/assets',
 //              '#': '@/components',
 //              'views': '@/views',
 //          }
 //      }
 //  }
 integrity:true

 /**
  * 配置webpack(简单配置)
  */
 /**
  * 配置webpack(链式操作)
  */
 /**
  * css配置
  * css.modules:
  * css.extract:
  * css.sourceMap:是否生成css.map文件
  * css.loaderOptions:
  */
 /**
  * webpack-dev-server配置
  * devServer.proxy:
  */,

 assetsDir: './',
 publicPath: ''
}

