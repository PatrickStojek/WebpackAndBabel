const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',  // Assuming this is your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,           // This tells Webpack to look for all .js files
        exclude: /node_modules/, // Exclude files in the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile the files
          options: {
            presets: ['@babel/preset-env'] // Use the @babel/preset-env preset
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML file
      filename: 'index.html',
    }),
  ],
};
