"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),a=0;console.log(a);var studentList=[{name:"王小艺",gender:"女",mobile:"13333333333",email:"wangxiaoyi@xdf.cn",values:"Coconut",checkBoxs:!0,selectvaue:"lime"},{name:"张三",gender:"女",mobile:"13333333334",email:"wangxiaoyi@xdf.cn",values:"Coconut",checkBoxs:!0,selectvaue:"lime"},{name:"李四",gender:"女",mobile:"13333333335",email:"wangxiaoyi@xdf.cn",values:"Coconut",checkBoxs:!0,selectvaue:"lime"},{name:"王五",gender:"女",mobile:"13333333336",email:"wangxiaoyi@xdf.cn",values:"Coconut",checkBoxs:!0,selectvaue:"lime"}],names=0,ModifyStudent=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:e.list.name,gender:e.list.gender,mobile:e.list.mobile,email:e.list.email,value:e.list.values,checkBoxs:e.list.checkBoxs},n.handelCilck=n.handelCilck.bind(n),n.handelChange=n.handelChange.bind(n),n.handelNameChange=n.handelNameChange.bind(n),n.handelMobileChange=n.handelMobileChange.bind(n),n.handelSubimtClick=n.handelSubimtClick.bind(n),n.handelSelectChange=n.handelSelectChange.bind(n),n.handelRadioClick=n.handelRadioClick.bind(n),n.handelChecBoxs=n.handelChecBoxs.bind(n),n}return _inherits(t,e),_createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.state={name:e.list.name,gender:e.list.gender,mobile:e.list.mobile,email:e.list.email,value:e.list.values,checkBoxs:e.list.checkBoxs,selectvaue:e.list.selectvaue}}},{key:"componentDidMount",value:function(){this.setState({checkBoxs:!0,value:"Coconut"})}},{key:"handelSubimtClick",value:function(e){studentList[this.props.onHande].name=this.state.name,studentList[this.props.onHande].email=this.state.email,studentList[this.props.onHande].gender=this.state.gender,this.props.that.setState({item:this.props.onHande})}},{key:"handelChange",value:function(e){this.setState({gender:e.target.value})}},{key:"handelChecBoxs",value:function(e){this.setState({checkBoxs:e.target.checked}),console.log(this.state.checkBoxs),console.log(e.target.checked)}},{key:"handelRadioClick",value:function(e){console.log(e.target.checked)}},{key:"handelSelectChange",value:function(e){this.setState({selectvaue:e.target.value})}},{key:"handelNameChange",value:function(e){this.setState({name:e.target.value}),console.log(e.target.value)}},{key:"handelMobileChange",value:function(e){this.setState({mobile:e.target.value})}},{key:"handelCilck",value:function(){console.log(123)}},{key:"render",value:function(){return React.createElement("div",{style:{display:this.props.styles}},React.createElement("from",null,React.createElement("span",{onClick:this.handelCilck.bind(this)},"姓名"),React.createElement("input",{type:"text",onChange:this.handelNameChange,value:this.state.name})," ",React.createElement("br",null),React.createElement("span",null,"性别"),React.createElement("input",{type:"text",onChange:this.handelChange,value:this.state.gender}),React.createElement("br",null),React.createElement("span",null,"手机"),React.createElement("input",{type:"text",onChange:this.handelMobileChange,value:this.state.mobile}),React.createElement("br",null),React.createElement("span",null,"身份证"),React.createElement("input",{type:"text",onChange:this.handelMobileChange,value:this.state.email}),React.createElement("br",null),React.createElement("select",{value:this.state.selectvaue,onChange:this.handelSelectChange},React.createElement("option",{value:"grapefruit"},"Grapefruit"),React.createElement("option",{value:"lime"},"Lime"),React.createElement("option",{value:"coconut"},"Coconut"),React.createElement("option",{value:"mango"},"Mango")),React.createElement("input",{type:"checkbox",checked:this.state.checkBoxs,onChange:this.handelChecBoxs}),React.createElement("input",{type:"checkbox",onClick:this.handelRadioClick}),React.createElement("input",{type:"checkbox",onClick:this.handelRadioClick}),React.createElement("input",{type:"radio",name:"dan",onClick:this.handelRadioClick}),React.createElement("input",{type:"radio",name:"dan",onClick:this.handelRadioClick}),React.createElement("input",{type:"submit",onClick:this.handelSubimtClick,value:"确定"}),React.createElement("span",null,"email"),React.createElement("input",{type:"text",value:this.state.gender}),React.createElement("br",null)))}}]),t}(React.Component),Student=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={item:"0",styles:"none"},n.handleClick=n.handleClick.bind(n),n}return _inherits(t,e),_createClass(t,[{key:"componentWillReceiveProps",value:function(e){console.log("fujyoubianhua"),console.log(this),console.log(this.props.onHande),console.log(e)}},{key:"componentDidMount",value:function(){console.log(this.refs.Myfirst)}},{key:"runclick",value:function(e){}},{key:"handleClick",value:function(e){console.log(this.props.jquery),e=e||event,this.setState({item:this.props.jquery(e.target).attr("data-index"),styles:"block"})}},{key:"render",value:function(){var e=this,t=this.props.student.map(function(t,n){return console.log(n),React.createElement("tr",null,React.createElement("td",null,t.name),React.createElement("td",null,t.gender),React.createElement("td",null,t.mobile),React.createElement("td",null,t.email),React.createElement("td",{onClick:e.handleClick,"data-index":n}," hello"))},this);this.state.item;return React.createElement("div",null,React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",{ref:"Myfirst"},"姓名"),React.createElement("td",null,"性别"),React.createElement("td",null,"手机或固定电话"),React.createElement("td",null,"E-mail"),React.createElement("td",{onClick:this.handleClick},"操作"))),React.createElement("tbody",null,t)),React.createElement(ModifyStudent,{list:studentList[this.state.item],onHande:this.state.item,that:this,styles:this.state.styles}))}}]),t}(React.Component);ReactDOM.render(React.createElement(Student,{student:studentList,jquery:jQuery}),document.getElementById("big")),console.log(document.getElementById("big")),console.log(ReactDOM.findDOMNode(document.getElementById("big")));var NameForm=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return _inherits(t,e),_createClass(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return React.createElement("form",{onSubmit:this.handleSubmit},"Name:",React.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),React.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(React.Component);ReactDOM.render(React.createElement(NameForm,null),document.getElementById("NameForm"));var FlavorForm=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:"coconut"},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return _inherits(t,e),_createClass(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Your favorite flavor is: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return React.createElement("form",{onSubmit:this.handleSubmit},"Pick your favorite La Croix flavor:",React.createElement("select",{value:this.state.value,onChange:this.handleChange},React.createElement("option",{value:"grapefruit"},"Grapefruit"),React.createElement("option",{value:"lime"},"Lime"),React.createElement("option",{value:"coconut"},"Coconut"),React.createElement("option",{value:"mango"},"Mango")),React.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(React.Component);ReactDOM.render(React.createElement(FlavorForm,null),document.getElementById("selece"));