import React, { Component } from 'react';
import userLog from '../static/img/userLogo.png';

class App extends Component {

    render() {
        return (
            <div id="container">
                <div className="left-col">
                    <div className="overlay" style={{background: "#4d4d4d"}}/>
                    <div className="intrude-less">
                        <header id="header" className="inner">
                            <a href="/" className="profilepic">
                                <img src={userLog} className="js-avatar"/>
                            </a>
                            <h1 className="header-author"><a href="/">Litten</a></h1>
                            <p className="header-subtitle">胆小认生，不易相处</p>
                            <nav className="header-menu">
                                <ul>
                                    <li><a href="/">主页</a></li>
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
                <div className="mid-col">
                    <div id="wrapper" className="body-wrap">
                        <div className="menu-l">
                            <div id="js-content" className="content-ll">
                                <article id="post-prevent-spiders" className="article article-type-post  article-index" itemScope="" itemProp="blogPost">
                                    <div className="article-inner">
                                        <header className="article-header">
                                            <h1 itemProp="name">
                                                <a className="article-title">反击爬虫，前端工程师的脑洞可以有多大？</a>
                                            </h1>
                                            <a className="archive-article-date">
                                                <time dateTime="2017-07-09T02:36:00.000Z" itemProp="datePublished"><i className="icon-calendar icon"/>2017-07-09</time>
                                            </a>
                                        </header>
                                        <div className="article-entry" itemProp="articleBody">
                                            <p><em>—— 同时发表于<a href="http://imweb.io/topic/595b7161d6ca6b4f0ac71f05" target="_blank" rel="noopener">imweb.io</a></em></p>
                                            <h3 id="1-前言"><a className="headerlink" title="1. 前言" target="_blank"></a>1. 前言</h3>
                                            <p>对于一张网页，我们往往希望它是结构良好，内容清晰的，这样搜索引擎才能准确地认知它。<br/>而反过来，又有一些情景，我们不希望内容能被轻易获取，比方说电商网站的交易额，教育网站的题目等。因为这些内容，往往是一个产品的生命线，必须做到有效地保护。这就是<strong>爬虫与反爬虫</strong>这一话题的由来。</p>
                                            <a className="article-more-a">more &gt;&gt;</a>
                                        </div>
                                        <div className="article-info article-info-index">
                                            <div className="article-tag tagcloud">
                                                <i className="icon-price-tags icon"/>
                                                <ul className="article-tag-list">
                                                    <li className="article-tag-list-item">
                                                        <a href="javascript:void(0)"
                                                           className="js-tag article-tag-list-link color3">安全</a>
                                                    </li>
                                                    <li className="article-tag-list-item">
                                                        <a href="javascript:void(0)"
                                                           className="js-tag article-tag-list-link color3">前端</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <p className="article-more-link">
                                                <a className="article-more-a">展开全文 &gt;&gt;</a>
                                            </p>
                                            <div className="clearfix"/>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;