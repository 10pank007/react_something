import {Component} from "react";

class Test extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.inc = this.inc.bind(this);
        this.state = {
            a: 0
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}));
    }
    render() {
        console.log("render");
        return (
            <div>
                <div>Hello from class component</div>
                <div>A : {this.state.a}</div>
                <button onClick={this.inc}>Inc</button>
                <div>B: {this.props.b}</div>
            </div>

        )
    }
}

export {Test}