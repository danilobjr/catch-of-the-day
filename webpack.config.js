const _ = require('lodash');

const commonConfig = {
    entry: './src/index.tsx',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.scss', 'sass']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts'
            },
            {
                test: /\.s(a|c)ss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};

const target = process.env.npm_lifecycle_event;

if (target === 'start' || !target) {
    const devConfig = {
        module: {
            preLoaders: [
                {
                    text: /\.js$/,
                    loader: 'source-map'
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './build'
        }
    };
    
    module.exports = _.merge(commonConfig, devConfig);
}