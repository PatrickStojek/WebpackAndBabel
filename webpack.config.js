const path = require('path')

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        fileName: 'app.min.js'
    },
    module: {
        rules: []
    }
}

