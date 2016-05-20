const _ = require('lodash');

const commonConfig = {
    entry: './src/index.tsx',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts'
            }
        ]
    }
};

const target = process.env.npm_lifecycle_event;

if (target === 'start' || !target) {
    const devConfig = {
        devServer: {
            contentBase: './build'
        }
    };
    
    module.exports = _.merge(commonConfig, devConfig);
}