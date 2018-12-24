import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Left, Footer, User } from './components';
import { ArticleDetail, Home } from './page';
import { connect } from 'react-redux';

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
        const { collapsed } = this.props;
        const { height } = this.state;
        return (
            <Router>
                <div>
                    <div id="container" style={{ height }}>
                        <Left />
                        <div className="mid-col">
                            <div id="wrapper" className="body-wrap">
                                <div className="menu-l">
                                    <div id="js-content" className="content-ll">
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/article/:id(\d+)" component={ArticleDetail} />
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                    {
                        collapsed &&
                        <div className="cy-mask" style={{ height }}/>
                    }
                    {
                        collapsed &&
                        <User />
                    }
                </div>
            </Router>
        );
    }
}


export default connect(({ collapsed }) => ({ collapsed }))(App);