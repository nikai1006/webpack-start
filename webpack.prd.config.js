var path = require("path")
module.exports = {
    entry: {
        main: './src/script/main.js',
        b: './src/script/b.js'
    }, //打包的入口文件
    output: {//打包输出
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name]-[chunkhash].js'
    },
    mode: 'production'
}