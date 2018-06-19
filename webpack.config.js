const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.jsx',//入口文件
    output: {
        path: path.resolve(__dirname, './dist'),//打包文件
        // publicPath:'/dist/',
        // filename: 'js/dist.js'
        filename: '[name].[chunkhash].dist.js',
        chunkFilename: '[name].dist.js'
    },
    resolve: {
        alias: {
            pages:path.resolve(__dirname, 'src/pages'),
            common:path.resolve(__dirname, 'src/common')
        }
    },
    module: {
        rules: [
            //js文件处理
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']

                    }
                }
            },
            //css文件处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //sass文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片的处理
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }//文件大于8k的时候形成独立的文件
                    }
                ]
            },
            //字体的处理
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }//文件大于8k的时候形成独立的文件
                    }
                ]
            }
        ]

    },// exclude: /(node_modules)/,不做处理，babel-loader用法，presets: ['env']简写,react的安装presets: ['env','react']
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),//自己自定义一个index.html
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/base.js',

        })
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        // })
    ],
    //webpack-dev-server
    devServer: {
        //contentBase: './dist',//有publicPath:'/dist/',就不要contentBase: './dist'
        port:8080,
        historyApiFallback:{
            index:'/dist/index.html'
        }//如果找不到页面，自动跳到这个页面来,然后重启一下yarn run dev
        // historyApiFallback:true
    }


};