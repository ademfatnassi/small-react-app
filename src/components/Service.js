import React, { Component } from 'react'
import { getAllAuthors } from '../services'

export class Service extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    async componentDidMount() {
        try {
            const data = await getAllAuthors();
            this.setState({ list: [...data] });
        } catch (error) {
            console.log('FAILED%');
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map(item => <h1 key={item.id}>{item.firstName}</h1>)
                }
            </div>
        )
    }
}

export default Service
