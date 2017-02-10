let data=[
    {
        name:'张伟伟',
        phone:'13333333333',
        address:'北京海淀区就看得见三看九分裤艰苦奋斗时间啊',
        default:true
    },
    {
        name:'张三',
        phone:'13333333333',
        address:'北京海淀区就看得见',
        default:false
    },
    {
        name:'李四',
        phone:'13333333333',
        address:'北京海淀区就看得见三看九',
        default:false
    },
    {
        name:'王五',
        phone:'13333333333',
        address:'北京海淀区就看得见三看九分裤时间啊',
        default:true
    }
]
class Address extends React.Component{
    constructor(props){
        super(props);
        this.state={
            defaults:1
        };
        this.delHandelClick=this.delHandelClick.bind(this);
        this.defaultHandelClick=this.defaultHandelClick.bind(this);
    }
    delHandelClick(e){
        console.log(e.target.getAttribute('data-del'));

    }
    defaultHandelClick(e){
        data[1].default=true;
        this.setState({
            defaults:this.state.defaults++
        })
    }
    render(){

        return(
        <div>
            {
                this.props.data.map((data)=>{
                    return (
                    <div className={"send-modebox"}>
                        <div className={"send-namebox"}>
                            <h3 className={"send-name"}>
                                <span>{data.name}</span>
                                <i>{data.phone}</i>
                            </h3>
                            <p className={"send-adress"}>{data.address}</p>
                        </div>
                        <div className={"clearfix defult-adressbox"}>
                            <span className={data.default?"fl defult-adress defult-adress-on":"fl defult-adress"
         } onClick={this.defaultHandelClick}>默认地址</span>
                            <span className={"fr adress-delete"} data-del='0' onClick={this.delHandelClick}>删除</span>
                            <span className={"fr adress-make"}>编辑</span>
                        </div>
                    </div>
                    );

                })
            }

        </div>
        );
    }
}
ReactDOM.render(<Address data={data} />,document.getElementById('addressList'));