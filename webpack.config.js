module.exports = {
    entry: './src/index.ts',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx']
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