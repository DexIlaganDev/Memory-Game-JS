const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename : 'images/[name][ext][query]'
    },
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type : 'asset/resource'
            }
        ]
    },
    devServer : {
        port : 8090,
        static : path.resolve(__dirname, 'template')
    },
    plugins : [
        new HtmlWebpackPlugin(
            {
                template : './template/app.html',
            }),
        new CopyPlugin(
            {
                patterns : [
                    {
                        from : './src/images',
                        to : 'images'
                    }
                ]
            })
    ]
}