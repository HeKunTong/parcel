import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Left, Footer } from './components';
import { Article, Home } from './page';

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
                    <div className="mid-col">
                        <div id="wrapper" className="body-wrap">
                            <div className="menu-l">
                                <div id="js-content" className="content-ll">
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/article/:id(/\d+/)" component={Article} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;