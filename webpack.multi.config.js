var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
        d: './src/script/d.js',
    }, //打包的入口文件
    output: {//打包输出
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://nikai.net.cn/'
    },
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',//指定文件名
            filename: 'index.html',//指定文件名,也可以没有
            template: 'index.html',
            // inject:'head',
            inject: false,
            title: 'xixi baby',
            date: new Date(), //自定义元素
            minify: { //对html压缩
                removeComments: true,//删除注释
                collapseWhitespace: true//删除空格
            }
        }),
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',//指定文件名
            filename: 'index-2.html',//指定文件名,也可以没有
            template: 'index.html',
            // inject:'head',
            inject: false,
            title: 'c page',
            date: new Date(), //自定义元素
            // minify: { //对html压缩
            //     removeComments: true,//删除注释
            //     collapseWhitespace: true//删除空格
            // }
        }),
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',//指定文件名
            filename: 'index-3.html',//指定文件名,也可以没有
            template: 'index.html',
            // inject:'head',
            inject: false,
            title: 'd page',
            date: new Date(), //自定义元素
            // minify: { //对html压缩
            //     removeComments: true,//删除注释
            //     collapseWhitespace: true//删除空格
            // }
        })
    ]
}