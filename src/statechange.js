class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    componentWillUnmount(){
        console.log('xiaohui')
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        return  (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
//ReactDOM.render(<Clock />,document.getElementById('odv3'));


class MyReact extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            name:'lhp',
            age:'18'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        window.setInterval(
            () => {
                this.setState({
                    name:'lfh'
                })
            },
            1000
        );
    }
    handeClickRun(){
        console.log(this.state);
    }

    componentWillUnmount(){
        console.log("chengong");
    }
    handleClick(){
        //this.componentWillUnmount();
        //console.log(React.bool(this.refs.myName.innerHTML));
        //console.log(this.state);
        //console.log(this.props.name);
        ReactDOM.unmountComponentAtNode(/*document.getElementById("odiv3")*/this.refs.nihao);
        //console.log(React.PropTypes.arrayOf(this.refs.myName.innerHTML));
        //this.handeClickRun();

    }
    Mystring(name){
        return React.PropTypes.string(name);
    }

    render(){
        return (
            <div ref='nihao' data-se='se'><span style={{color:"red"}} onClick={this.handleClick} ref='myName'>{this.state.name+this.props.namelast.hello}</span>
                <span onClick={(e) => this.handeClickRun(e)} ref=''>{'handerun'}</span>
                <br/>
                {
                    this.props.name.map(function(i){
                        return <span>{i.name}<span>{i.age}</span><br/></span>
                    })
                }

            </div>
        )
    }
}
MyReact.propTypes={
    namelast:React.PropTypes.string,
    name:React.PropTypes.func
}
let sdsd=[{name:'lhp',age:18},{name:'lfh',age:28}]
ReactDOM.render(<MyReact name={sdsd} namelast={{hello:"hello"}}/>,document.getElementById('odiv3'));
sdsd[0].name='asfasdgsafsdaf';