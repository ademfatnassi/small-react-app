import React from 'react';

class Child extends React.Component {

    handleChildBtn = () => {
        console.log("Clicked Child btn", this.props.send);
        this.props.send('Child');
    }
    render() {
        return (
            <button onClick={this.handleChildBtn}>Send To Parent</button>
        )
    }
}

export { Child as default }