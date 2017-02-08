import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        path.join(__dirname,'/client/index.js'),
        'webpack-hot-middleware/client'
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot','babel']
            }
        ]
    },
    resolve: {
        extentions: ['', '.js']
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
}