const path = require('path');

const commonConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'app.bundle.js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      data: path.resolve(__dirname, 'src/data'),
      models: path.resolve(__dirname, 'src/models'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
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

  module.exports = { ...commonConfig, ...devConfig };
} else {
  module.exports = commonConfig;
}

