const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        login: './src/forFEjs/login-account.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Use dynamic filenames for each entry point
      },
    watch: true
}