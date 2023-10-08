const path = require('path');
const assetsPath = path.resolve(__dirname, '../shopify/assets/');

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV || 'development';
// Source map setting
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  // Entry point
  entry: {
    'custom-script': './src/ts/main.ts',
  },
  // Output files
  output: {
    path: assetsPath,
    filename: '[name].js',
  },
  devtool: enabledSourceMap ? 'source-map' : 'eval-source-map',
};
