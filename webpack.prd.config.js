var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        b: './src/script/b.js'
    }, //打包的入口文件
    output: {//打包输出
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name]-[chunkhash].js'
    },
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({template: 'index.html'})
    ]
}