import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forceUpdateR: 0,
        }
        console.log('1- Constructor');
    }
    componentDidMount() {
        console.log('3- DidMount');
    }
    componentDidUpdate() {
        console.log('4- DidUpdate');
    }
    componentWillUnmount() {
        console.log('5- UnMount');
    }
    forceFullUpdate() {
        this.setState({ forceUpdateR: 100 });
    }
    UnMountApp() {
        return unmountComponentAtNode(document.getElementById('root'));
    }
    render() {
        console.log('2- Render', this.state);
        return (
            <>
                <h1>Hello LifeCycle</h1>
                <button onClick={this.forceFullUpdate.bind(this)}> Force Update</button>
                <br />
                <button onClick={this.UnMountApp.bind(this)}> UnmountApp</button>
            </>
        )
        // <> ... </> # import Fragment -> <Fragment></Fragment> # [ <h1 key=""></h1>,<p key=""></p>]
    }
}
export default LifeCycle;