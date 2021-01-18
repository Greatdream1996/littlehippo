const path=require('path')
module.exports = {
  publicPath: './',
  configureWebpack:{
    resolve:{
    alias:{
       'assets':path.resolve(__dirname,'src/assets/'),
       'open':path.resolve(__dirname,'public/')
    }
  }
  }
}
