import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Parent from '../components/Parent'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={['/', '/home']} exact render={(props) => {
                        console.log(props);
                        return <h1>Hello World from routes + {props.history.location.state.msg}</h1>
                    }} />
                    <Route path='/parent' exact component={Parent} />
                    <Route path='/link' exact render={() => <Link to="/parent">Go to parent</Link>} />
                    <Route render={() => { return <h1>404 NOT FOUND</h1> }} />
                </Switch>
            </Router>)
    }
}

export { Routes as default }