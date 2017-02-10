'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = [{
    name: '张伟伟',
    phone: '13333333333',
    address: '北京海淀区就看得见三看九分裤艰苦奋斗时间啊',
    default: true
}, {
    name: '张三',
    phone: '13333333333',
    address: '北京海淀区就看得见',
    default: false
}, {
    name: '李四',
    phone: '13333333333',
    address: '北京海淀区就看得见三看九',
    default: false
}, {
    name: '王五',
    phone: '13333333333',
    address: '北京海淀区就看得见三看九分裤时间啊',
    default: true
}];

var Address = function (_React$Component) {
    _inherits(Address, _React$Component);

    function Address(props) {
        _classCallCheck(this, Address);

        var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

        _this.state = {
            defaults: 1
        };
        _this.delHandelClick = _this.delHandelClick.bind(_this);
        _this.defaultHandelClick = _this.defaultHandelClick.bind(_this);
        return _this;
    }

    _createClass(Address, [{
        key: 'delHandelClick',
        value: function delHandelClick(e) {
            console.log(e.target.getAttribute('data-del'));
        }
    }, {
        key: 'defaultHandelClick',
        value: function defaultHandelClick(e) {
            data[1].default = true;
            this.setState({
                defaults: this.state.defaults++
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                this.props.data.map(function (data) {
                    return React.createElement(
                        'div',
                        { className: "send-modebox" },
                        React.createElement(
                            'div',
                            { className: "send-namebox" },
                            React.createElement(
                                'h3',
                                { className: "send-name" },
                                React.createElement(
                                    'span',
                                    null,
                                    data.name
                                ),
                                React.createElement(
                                    'i',
                                    null,
                                    data.phone
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: "send-adress" },
                                data.address
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: "clearfix defult-adressbox" },
                            React.createElement(
                                'span',
                                { className: data.default ? "fl defult-adress defult-adress-on" : "fl defult-adress", onClick: _this2.defaultHandelClick },
                                '\u9ED8\u8BA4\u5730\u5740'
                            ),
                            React.createElement(
                                'span',
                                { className: "fr adress-delete", 'data-del': '0', onClick: _this2.delHandelClick },
                                '\u5220\u9664'
                            ),
                            React.createElement(
                                'span',
                                { className: "fr adress-make" },
                                '\u7F16\u8F91'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Address;
}(React.Component);

ReactDOM.render(React.createElement(Address, { data: data }), document.getElementById('addressList'));