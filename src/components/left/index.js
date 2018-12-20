import React, { Component } from "react";
import { Link } from 'react-router-dom';
import userLogo from '/static/img/userLogo.png';

class Left extends Component {
    render() {
        return (
            <div className="left-col">
                <div className="overlay" style={{background: "#4d4d4d"}}/>
                <div className="intrude-less">
                    <header id="header" className="inner">
                        <a href="/" className="profilepic">
                            <img src={userLogo} className="js-avatar"/>
                        </a>
                        <h1 className="header-author"><a href="/">Litten</a></h1>
                        <p className="header-subtitle">胆小认生，不易相处</p>
                        <nav className="header-menu">
                            <ul>
                                <li><Link to="/">主页</Link></li>
                                <li><a href="/photos">相册</a></li>
                            </ul>
                        </nav>
                        <nav className="header-smart-menu">
                            <a q-on="click: openSlider(e, 'innerArchive')" href="javascript:void(0)">所有文章</a>
                            <a q-on="click: openSlider(e, 'aboutme')" href="javascript:void(0)">关于我</a>
                        </nav>
                        <nav className="header-nav">
                            <div className="social">
                                <a className="github" target="_blank" href="https://github.com/litten" title="github"><i className="icon-github"/></a>
                                <a className="weibo" target="_blank" href="http://weibo.com/litten225" title="weibo"><i className="icon-weibo"/></a>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        );
    }
}

export default Left;