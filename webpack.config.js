const path = require('path');

var mainScripts = {
    resolve : {
        alias: {
            'helper-script' : path.join(__dirname, './src/build-js/helpers/helper-script.js'),
        }
    }
};


var homeJs = Object.assign({}, mainScripts, {
    mode: "production",
    entry: [
      "./src/build-js/build-home.js"
    ],
    output: {
        filename: 'home.js',
        path: path.join(__dirname, 'dist')
    }
})
  
  
module.exports = [
    homeJs
]
  