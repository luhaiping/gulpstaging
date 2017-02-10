
let fn=(name)=>{
    return name;
}
const elem=<div>hello{fn('lhp')}<h2>first</h2></div>;
ReactDOM.render(elem,document.getElementById('odiv'));
console.log(123);


const fn2=(user)=>{
    if(user){
        return <h3 className='sf'>成功</h3>
    }else{
        return <h3>失败</h3>
    }
};

class Welcomes extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}



let ele2=fn2(true);

function Welcome(p) {
    return <h1>Hello, {p.name}
        < Welcomes name='Welcomes'/>
    </h1>;
}

const element = <Welcome name="Sara" />;
/*ReactDOM.render(
    element,
    document.getElementById('root')
);*/
ReactDOM.render(element,document.getElementById('odiv2'));

