const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'vue/dist/vue.esm.js', // devtools vue
      'vue-router',
      'vuex', 
      'axios',
      'element-ui'
    ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
