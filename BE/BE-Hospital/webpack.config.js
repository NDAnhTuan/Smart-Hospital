const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    entry: './src/forFEjs/role-hoang.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}