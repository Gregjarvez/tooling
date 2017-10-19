const ExtractHtmlPlugins = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json'],
  },
  stats: {
    colors: true,
    chunks: true,
    reasons: true,
  },
  devServer: {
    contentBase: './public',
    publicPath: '/public/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new ExtractHtmlPlugins({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};
