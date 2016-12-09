//ensures that transpiling occurs BEFORE the code gets tested
require('babel-register')();

//disables webpack features mocha doesn't understand
require.extensions['.css'] = function() {};
