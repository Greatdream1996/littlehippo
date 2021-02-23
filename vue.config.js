const path=require('path')
module.exports = {
  publicPath: './',
  configureWebpack:{
    resolve:{
    alias:{
       'assets':path.resolve(__dirname,'src/assets/'),
       'open':path.resolve(__dirname,'public/'),
       'components':path.resolve(__dirname,'src/components/')
    }
  }
},
pages: {
  index: {
    // page 的入口
    entry: 'src/pc/main.js',
    // 模板来源就是在public里面创建的入口文件名
    template: 'public/index.html',
    // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
    filename: 'index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'littlehippo',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  // 当使用只有入口的字符串格式时，也就是只有entry属性时，直接用字符串表示模块入口
  mobile: {
    // page 的入口
    entry: 'src/mobile/main.js',
    // 模板来源就是在public里面创建的入口文件名
    template: 'public/indexs.html',
    // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
    filename: 'indexs.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'littlehippo',
  },
  aside: {
    entry: 'src/aside/main.js',
    template: 'public/aside.html',
    filename:'aside.html',
    title: 'littlehippo',
  },
  headertop:{
    entry: 'src/headertop/main.js',
    template: 'public/headertop.html',
    filename: 'headertop.html',
    title:'littlehippo'
  }
}
}