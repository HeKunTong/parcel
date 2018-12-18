import React, { Component } from 'react';
import Face from '../face';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: ""
        };
    }

    componentWillMount() {
        document.addEventListener("click", (e) => {
            const dom = e.target;
            const btn = document.querySelector(".function-face-w");
            const faceBox = document.querySelector(".face-wrapper-dw");
            const { show } = this.state;
            if (show) {
                if (!faceBox.contains(dom)) {
                    this.setState({show: false});
                }
            } else {
                if (btn.contains(dom)) {
                    this.setState({show: true});
                }
            }
        });
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onCallBack = (value) => {
        this.setState({value: this.state.value + value});
    }


    render() {

        const { show, value } = this.state;

        return (
            <div id="SOHUCS" sid="prevent-spiders">
                <div id="SOHU_MAIN">
                    <div className="module-cmt-header">
                        <div className="section-cbox-w">
                            <div className="cbox-block-w clear-g">
                                <div node-type="block-head-w" className="block-head-w block-head-login">
                                    <div node-type="header-login" className="header-login">登录</div>
                                </div>
                                <div node-type="login-select" className="block-post-w">
                                    <div className="module-cmt-box">
                                        <div className="post-wrap-w">
                                            <div className="post-wrap-border-l"/>
                                            <div className="post-wrap-border-r"/>
                                            <div node-type="post-wrap-main" className="post-wrap-main">
                                                <div className="post-wrap-border-t">
                                                    <div node-type="post-wrap-border-t-l" className="post-wrap-border-t-l"/>
                                                    <div node-type="post-wrap-border-t-r" className="post-wrap-border-t-r"/>
                                                </div>
                                                <div className="wrap-area-w">
                                                    <div className="area-textarea-w">
                                                        <textarea value={value} onChange={this.onChange} node-type="textarea" className="textarea-fw textarea-bf" placeholder="有事没事说两句..."/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clear-g wrap-action-w">
                                                <div className="action-function-w">
                                                    <ul className="clear-g">
                                                        <li node-type="function-face" className="function-face-w">
                                                            <a className="effect-w"><i className="face-b"/></a>
                                                        </li>
                                                    </ul>
                                                    {
                                                        show &&
                                                        <Face ref="face" callback={this.onCallBack}/>
                                                    }
                                                </div>
                                                <div className="clear-g action-issue-w">
                                                    <div className="issue-btn-w">
                                                        <a><button node-type="issue" className="btn-fw"/></a>
                                                    </div>
                                                </div>
                                                <div className="cbox-prompt-w" node-type="error-tips">
                                                    <span node-type="prompt-empty" className="prompt-empty-w">评论内容为空！</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-comment-empty-w">
                                    </div>
                                    <div className="list-close-comment-w">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div node-type="module-cmt-list" className="module-cmt-list section-list-w">
                        <div className="cmt-list-type">
                            <ul className="clear-g type-lists">
                                <li className="type-list active">评论</li>
                            </ul>
                            <div className="cmt-list-border"/>
                            <div className="cmt-list-number">
                                <span className="comment-number"><span className="cy-number">51</span>人参与,<span
                                    className="cy-number">51</span>条评论</span>
                            </div>
                        </div>
                        <div className="list-block-gw list-hot-w">
                            <div className="block-title-gw">
                                <ul className="clear-g">
                                    <li>
                                        <div className="title-name-gw">
                                            <div className="title-name-gw-tag"/>
                                            热门评论
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div node-type="hot-list">
                                <div node-type="cmt-item" data-id="1423540493" data-user-id="849787402" data-platform-id="2" className="clear-g block-cont-gw">
                                    <div className="cont-head-gw">
                                        <div className="head-img-gw">
                                            <a node-type="photo"  title="闰土在流浪">
                                                <div className="img-corner"/>
                                                <img src="http://sucimg.itc.cn/avatarimg/849787402_1501140758502_c55" width="42" height="42" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="cont-msg-gw">
                                        <div node-type="prop-wrap" className="prop-wrap" style={{ height: "90px"}}>
                                            <div className="prop-wrap-hidden" style={{ height: "90px"}}>
                                                <span className="icon" style={{ left: "150px", top: "17px", background: 'url(\'/static/img/pFSEdA7_png\') no-repeat'}}>
                                                </span>
                                                <span className="icon" style={{ left: "188px", top: "44px", background: 'url(\'/static/img/pFSDZeW_png\') no-repeat'}}>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="msg-wrap-gw" style={{ marginTop: "-90px"}}>
                                            <div className="wrap-user-gw global-clear-spacing">
                                                <span className="user-time-gw">2017年7月27日 15:32</span>
                                                <span node-type="nickname" className="user-name-gw">
                                                    <a>闰土在流浪</a>
                                                </span>
                                                <span className="user-address-gw">[<i>江苏省扬州市</i>网友]</span>
                                            </div>
                                            <div className="wrap-issue-gw">
                                                <p className="issue-wrap-gw"><span
                                                    className="wrap-word-gw">请教一下，畅言必须要有ICP备案才能用，那用hexo+GitHub搭建的博客该怎么办呢</span>
                                                </p>
                                                <div className="cy-see-more">
                                                    <span/><i/>
                                                </div>
                                            </div>
                                            <div node-type="btns-bar" className="clear-g wrap-action-gw">
                                                <div node-type="action-click-gw"
                                                     className="action-click-gw global-clear-spacing">
                                                    <i className="gap-gw"/>
                                                    <span node-type="report" className="click-report-gw">
                                                        <a>
                                                            <i className="icon-gw icon-flag"/>
                                                            <em>举报</em>
                                                        </a>
                                                    </span>
                                                    <i className="gap-gw"/>
                                                    <span node-type="reply" className="click-reply-gw"><a>回复</a></span>
                                                    <i className="gap-gw"/>
                                                    <span node-type="support" className="click-ding-gw">
                                                        <a><i className="icon-gw icon-ding-bg"/><em className="icon-name-bg">1</em></a>
                                                    </span>
                                                    <i className="gap-gw"/>
                                                    <span node-type="prop" className="click-prop-gw">
                                                        <span className="prop-span">
                                                            <a/>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;