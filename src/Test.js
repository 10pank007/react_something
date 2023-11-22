import {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        this.inc = this.inc.bind(this);
        this.state = {
            a: 0
        }
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}));
    }
    render() {
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