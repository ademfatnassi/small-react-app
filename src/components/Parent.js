import React from 'react';
import Child from './Child'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pos: 'Parent'
        }
    }

    updatePos = (responseFromChild) => {
        this.setState({ pos: responseFromChild })
    }

    render() {
        return (
            <div>
                <h1>Hello World From {this.state.pos} !</h1>
                <Child send={this.updatePos} />
            </div>

        )
    }
}

export default Parent