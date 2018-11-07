var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        b: './src/script/b.js'
    }, //打包的入口文件
    output: {//打包输出
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',//指定文件名
            template: 'index.html',
            inject:'head'
        })
    ]
}