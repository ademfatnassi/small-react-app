import React from 'react';
const Input = (props) => {
    const { type, ...restProps } = props;

    return (
        <input
            type={type || 'text'}
            {...restProps}
        />
    )
}
class Events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            names: []
        }
    }
    handleFullName = (event) => {
        this.setState({ fullName: event.target.value });
    }
    handleClick = (event) => {
        event.preventDefault();
        // alert(this.state.fullName);
        const newNames = [...this.state.names, this.state.fullName];
        this.setState(
            { names: newNames, fullName: '' },
            () => {
                console.log(this.state.names);
            }
        )
    }

    render() {
        return (<div>
            <form onSubmit={this.handleClick}>
                <Input value={this.state.fullName} placeholder='Full Name' onChange={this.handleFullName} />
                {/* <button onClick={this.handleClick}>Add me!</button> */}
                <button type="submit">Add me!</button>

                {
                    this.state.names.map((name, index) => {
                        return (<div key={index}>
                            <h4>{index + 1}: {name}</h4>
                        </div>)
                    })
                }
            </form>

        </div >);
    }
}

/**
 *  <input
                type='text'
                placeholder='Full Name'
            /> 
 */

export default Events;
// yap: library : controle de saisie