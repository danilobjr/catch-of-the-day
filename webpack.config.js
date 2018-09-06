const path = require('path');

const commonConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.wasm', '.js', '.json', '.ts', '.tsx', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

const target = process.env.npm_lifecycle_event;

if (target === 'dev' || !target) {
  const devConfig = {
    // module: {
    //     preLoaders: [
    //         {
    //             text: /\.js$/,
    //             loader: 'source-map'
    //         }
    //     ]
    // },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './build',
    },
  };

  module.exports = Object.assign({}, commonConfig, devConfig);
}
