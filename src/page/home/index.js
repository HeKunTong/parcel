import React, { Component } from 'react';
import { Article } from "../../components";

class Home extends Component {
    render() {
        return (
            <div className="mid-col">
                <div id="wrapper" className="body-wrap">
                    <div className="menu-l">
                        <div id="js-content" className="content-ll">
                            <Article />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;