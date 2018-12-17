import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Left } from './components';
import { Home } from './page';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 500
        };
    }

    componentWillMount() {
        const height = document.body.clientHeight;
        this.setState({height});
    }

    render() {
        const { height } = this.state;
        return (
            <Router>
                <div id="container" style={{ height }}>
                    <Left />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;