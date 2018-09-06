const path = require('path');

const commonConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './docs'),
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
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './docs',
    },
  };

  module.exports = Object.assign({}, commonConfig, devConfig);
} else {
  module.exports = commonConfig;
}

