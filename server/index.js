import express from 'express';
import path from 'path';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import auth from './routes/auth';
import docs from './routes/docs';

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', auth);
app.use('/api/docs', docs);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*',(req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000,()=>{
    console.log('Running on localhost:3000');
})