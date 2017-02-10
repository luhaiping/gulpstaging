var React=require('react');
module.exports =class Welcomes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: 123};
    }
    render() {
        return (<h1>Hello, {this.state.date}</h1>);
    }
};
