let a=0;
console.log(a);

let studentList=[
    {
        name:"王小艺",
        gender:'女',
        mobile:'13333333333',
        email:'wangxiaoyi@xdf.cn',
        values:'Coconut',
        checkBoxs:true,
        selectvaue:'lime'
    },
    {
        name:"张三",
        gender:'女',
        mobile:'13333333334',
        email:'wangxiaoyi@xdf.cn',
        values:'Coconut',
        checkBoxs:true,
        selectvaue:'lime'
    },
    {
        name:"李四",
        gender:'女',
        mobile:'13333333335',
        email:'wangxiaoyi@xdf.cn',
        values:'Coconut',
        checkBoxs:true,
        selectvaue:'lime'
    },
    {
        name:"王五",
        gender:'女',
        mobile:'13333333336',
        email:'wangxiaoyi@xdf.cn',
        values:'Coconut',
        checkBoxs:true,
        selectvaue:'lime'
    }
];

let names=0;
class ModifyStudent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:props.list.name,
            gender:props.list.gender,
            mobile:props.list.mobile,
            email:props.list.email,
            value:props.list.values,
            checkBoxs:props.list.checkBoxs
        };
        this.handelCilck=this.handelCilck.bind(this);
        this.handelChange=this.handelChange.bind(this);
        this.handelNameChange=this.handelNameChange.bind(this);
        this.handelMobileChange=this.handelMobileChange.bind(this);
        this.handelSubimtClick=this.handelSubimtClick.bind(this);
        this.handelSelectChange=this.handelSelectChange.bind(this);
        this.handelRadioClick=this.handelRadioClick.bind(this);
        this.handelChecBoxs=this.handelChecBoxs.bind(this);


    }
    /*shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(nextState)
    }*/
    componentWillReceiveProps(nextProps){
        this.state={
            name:nextProps.list.name,
            gender:nextProps.list.gender,
            mobile:nextProps.list.mobile,
            email:nextProps.list.email,
            value:nextProps.list.values,
            checkBoxs:nextProps.list.checkBoxs,
            selectvaue:nextProps.list.selectvaue
        };

    }
    componentDidMount() {
        this.setState({
            checkBoxs:true,
            value:'Coconut'
        })
    }
    handelSubimtClick(e){
        studentList[this.props.onHande].name=this.state.name;
        studentList[this.props.onHande].email=this.state.email;
        studentList[this.props.onHande].gender=this.state.gender;
        this.props.that.setState({
            item:this.props.onHande
        });

    }
    handelChange(e){
        this.setState({gender: e.target.value});
    }
    handelChecBoxs(e){
        this.setState({checkBoxs: e.target.checked});
        console.log(this.state.checkBoxs);
        console.log(e.target.checked)
    }
    handelRadioClick(e){
        console.log(e.target.checked);
    }
    handelSelectChange(e){
        this.setState({selectvaue: e.target.value});
        //console.log(this.state.selectvalue);
    }
    handelNameChange(e){
        this.setState({name: e.target.value});
        console.log(e.target.value);
    }
    handelMobileChange(e){
        this.setState({mobile: e.target.value});
    }
    handelCilck(){
        console.log(123);
    }
    render(){
        return(
            <div style={{display:this.props.styles}}>
                <from>
                    <span onClick={this.handelCilck.bind(this)}>姓名</span><input type="text" onChange={this.handelNameChange} value={this.state.name}/> <br/>
                    <span>性别</span><input type="text" onChange={this.handelChange} value={this.state.gender}/><br/>
                    <span>手机</span><input type="text" onChange={this.handelMobileChange} value={this.state.mobile}/><br/>
                    <span>身份证</span><input type="text" onChange={this.handelMobileChange} value={this.state.email}/><br/>
                    <select value={this.state.selectvaue} onChange={this.handelSelectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <input type="checkbox" checked={this.state.checkBoxs} onChange={this.handelChecBoxs} />
                    <input type="checkbox"  onClick={this.handelRadioClick}/>
                    <input type="checkbox"  onClick={this.handelRadioClick}/>
                    <input type="radio" name='dan' onClick={this.handelRadioClick}/>
                    <input type="radio" name='dan' onClick={this.handelRadioClick}/>
                    <input type="submit" onClick={this.handelSubimtClick} value='确定'/>

                    <span>email</span><input type="text" value={this.state.gender}/><br/>
                </from>
            </div>
        )
    }
}


class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:"0",
            styles:'none'
        }
        this.handleClick=this.handleClick.bind(this);

    }

    componentWillReceiveProps(nextProps){

        console.log('fujyoubianhua');
        console.log(this);
        console.log(this.props.onHande);
        console.log(nextProps);
    }

    componentDidMount() {
    console.log(this.refs.Myfirst);
    }
    runclick(index){

    }
    handleClick(e){
        console.log(this.props.jquery);
        e=e||event;
        this.setState({
            item:this.props.jquery(e.target).attr('data-index'),
            styles:'block'
        });

    }
    render(){
        let list=this.props.student.map((i,n)=>{
            console.log(n);
            return  (<tr>
                <td>{i.name}</td>
                <td>{i.gender}</td>
                <td>{i.mobile}</td>
                <td>{i.email}</td>
                <td onClick={this.handleClick} data-index={n} > hello</td>
            </tr>)
        },this);
        let a=this.state.item;
        return(
            <div>
            <table>
                <thead>
                <tr>
                    <td ref='Myfirst'>姓名</td>
                    <td>性别</td>
                    <td>手机或固定电话</td>
                    <td>E-mail</td>
                    <td onClick={this.handleClick}>操作</td>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
                <ModifyStudent list={studentList[this.state.item]} onHande={this.state.item} that={this} styles={this.state.styles}/>
            </div>
        )
    }
}

ReactDOM.render(<Student  student={studentList} jquery={jQuery}/>,document.getElementById('big'));
console.log(document.getElementById('big'));
console.log(ReactDOM.findDOMNode(document.getElementById('big')));

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<NameForm />,document.getElementById('NameForm'));

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Pick your favorite La Croix flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<FlavorForm />,document.getElementById('selece'));