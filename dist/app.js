'use strict';

var Welcomes = require('./foo.js');
var React = require('React');
var ReactDOM = require('react-dom');

console.log(React.Component);
ReactDOM.render(React.createElement(Welcomes, null), document.getElementById('odiv4'));
var myfn = function myfn() {
    console.log(234);
};