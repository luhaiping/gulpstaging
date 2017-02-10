'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('xiaohui');
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);
//ReactDOM.render(<Clock />,document.getElementById('odv3'));


var MyReact = function (_React$Component2) {
    _inherits(MyReact, _React$Component2);

    function MyReact(props) {
        _classCallCheck(this, MyReact);

        var _this3 = _possibleConstructorReturn(this, (MyReact.__proto__ || Object.getPrototypeOf(MyReact)).call(this, props));

        console.log(props);
        _this3.state = {
            name: 'lhp',
            age: '18'
        };
        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(MyReact, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            window.setInterval(function () {
                _this4.setState({
                    name: 'lfh'
                });
            }, 1000);
        }
    }, {
        key: 'handeClickRun',
        value: function handeClickRun() {
            console.log(this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("chengong");
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            //this.componentWillUnmount();
            //console.log(React.bool(this.refs.myName.innerHTML));
            //console.log(this.state);
            //console.log(this.props.name);
            ReactDOM.unmountComponentAtNode( /*document.getElementById("odiv3")*/this.refs.nihao);
            //console.log(React.PropTypes.arrayOf(this.refs.myName.innerHTML));
            //this.handeClickRun();
        }
    }, {
        key: 'Mystring',
        value: function Mystring(name) {
            return React.PropTypes.string(name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                { ref: 'nihao', 'data-se': 'se' },
                React.createElement(
                    'span',
                    { style: { color: "red" }, onClick: this.handleClick, ref: 'myName' },
                    this.state.name + this.props.namelast.hello
                ),
                React.createElement(
                    'span',
                    { onClick: function onClick(e) {
                            return _this5.handeClickRun(e);
                        }, ref: '' },
                    'handerun'
                ),
                React.createElement('br', null),
                this.props.name.map(function (i) {
                    return React.createElement(
                        'span',
                        null,
                        i.name,
                        React.createElement(
                            'span',
                            null,
                            i.age
                        ),
                        React.createElement('br', null)
                    );
                })
            );
        }
    }]);

    return MyReact;
}(React.Component);

MyReact.propTypes = {
    namelast: React.PropTypes.string,
    name: React.PropTypes.func
};
var sdsd = [{ name: 'lhp', age: 18 }, { name: 'lfh', age: 28 }];
ReactDOM.render(React.createElement(MyReact, { name: sdsd, namelast: { hello: "hello" } }), document.getElementById('odiv3'));
sdsd[0].name = 'asfasdgsafsdaf';