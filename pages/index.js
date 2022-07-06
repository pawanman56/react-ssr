import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    increase = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    descrease = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render () {
        return(
            <div>
                {this.state.count}
                <button onClick={this.increase}>+</button>
                <button onClick={this.descrease}>-</button>
            </div>
        )
    }
}

export default Counter;
