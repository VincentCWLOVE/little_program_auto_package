const path = require('path');
const webpack = require('webpack')
const WXAppWebpackPlugin = require('wxapp-webpack-plugin');
const CopyPlugin = require ('copy-webpack-plugin');


const relativeFileLoader = (ext = '[ext]')=> {
    return {
        loader: 'file-loader',
        options: {
            useRelativePath: true,
            name: `[name].${ext}`,
            context: path.resolve(__dirname, 'src'),
        },
    };
}


module.exports = {
    // 引入 `app.js` 
    entry:  { app: './src/app.js' },
    output: {
        filename: '[name].js',
        // 此处 `dist` 为微信开发者工具引入的开发目录 
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: ['babel-loader'].filter(Boolean),
            },
            {
                test: /\.wxs$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    relativeFileLoader('wxss'),
                    'babel-loader',
                ].filter(Boolean),
            },
            {
                test: /\.(less|wxss)$/,
                include: /src/,
                use: [
                    relativeFileLoader('wxss'),
                    'postcss-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(json|png|jpg|gif)$/,
                include: /src/,
                use: relativeFileLoader(),
            },
            {
                test: /\.(wxml)$/,
                include: /src/,
                use: [
                    relativeFileLoader('wxml'),
                    {
                        loader: 'wxml-loader',
                        options: {
                            root: path.resolve(__dirname, 'src'),
                            enforceRelativePath: true,
                        },
                    },
                ],
            },
        ], 
    },
    plugins: [
        // 引入插件 
        new WXAppWebpackPlugin.default(),
        new webpack.DefinePlugin({
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin([
            {from: './src/project.config.json'}
        ],{
            ignore: [

            ],
 
            copyUnmodified: true
        })

    ],
    // optimization: {
    //     runtimeChunk: false,
    //     minimize: false,
    //     noEmitOnErrors: true,
    //     splitChunks: false
    // },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js'],
    },
};