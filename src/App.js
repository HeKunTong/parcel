import React, { Component } from 'react';
import { Left, Footer } from './components';
import { ArticleDetail, Home } from './page';
import { Router, Route, browserHistory, render, model as registerModel } from 'mirrorx';
import models from './models';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 500
        };
    }

    componentWillMount() {
        models.forEach(model => {
            registerModel(model);
        });
        render();
        const height = document.body.clientHeight;
        this.setState({height});
    }

    render() {
        const { height } = this.state;
        return (
            <Router history={browserHistory}>
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
                    <div className="cy-mask" style={{ height }}/>
                </div>
            </Router>
        );
    }
}

export default App;