'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fn = function fn(name) {
    return name;
};
var elem = React.createElement(
    'div',
    null,
    'hello',
    fn('lhp'),
    React.createElement(
        'h2',
        null,
        'first'
    )
);
ReactDOM.render(elem, document.getElementById('odiv'));
console.log(123);

var fn2 = function fn2(user) {
    if (user) {
        return React.createElement(
            'h3',
            { className: 'sf' },
            '\u6210\u529F'
        );
    } else {
        return React.createElement(
            'h3',
            null,
            '\u5931\u8D25'
        );
    }
};

var Welcomes = function (_React$Component) {
    _inherits(Welcomes, _React$Component);

    function Welcomes() {
        _classCallCheck(this, Welcomes);

        return _possibleConstructorReturn(this, (Welcomes.__proto__ || Object.getPrototypeOf(Welcomes)).apply(this, arguments));
    }

    _createClass(Welcomes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'Hello, ',
                this.props.name
            );
        }
    }]);

    return Welcomes;
}(React.Component);

var ele2 = fn2(true);

function Welcome(p) {
    return React.createElement(
        'h1',
        null,
        'Hello, ',
        p.name,
        React.createElement(Welcomes, { name: 'Welcomes' })
    );
}

var element = React.createElement(Welcome, { name: 'Sara' });
/*ReactDOM.render(
    element,
    document.getElementById('root')
);*/
ReactDOM.render(element, document.getElementById('odiv2'));