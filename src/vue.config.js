module.exports = {
    devServer:{
        proxy: {
           '^/api':{
            target: 'http://locahost:3000',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {'^/api': '/'}
           } 
        }
    }
}