var path = require("path")
module.exports = {
    entry: ['./src/script/main.js', './src/script/b.js'], //打包的入口文件
    output: {//打包输出
        path: path.resolve(__dirname, './dist/js'),
        filename: 'bundle.js'
    },
    mode: 'none'
}