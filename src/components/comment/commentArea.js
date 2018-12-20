import React, { Component } from 'react';
import Face from '../face';

class CommentArea extends Component {

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
            <div className="module-cmt-header">
                <div className="section-cbox-w">
                    <div className="cbox-block-w clear-g">
                        <div className="block-head-w block-head-login">
                            <div className="header-login">登录</div>
                        </div>
                        <div className="block-post-w">
                            <div className="module-cmt-box">
                                <div className="post-wrap-w">
                                    <div className="post-wrap-border-l"/>
                                    <div className="post-wrap-border-r"/>
                                    <div className="post-wrap-main">
                                        <div className="post-wrap-border-t">
                                            <div className="post-wrap-border-t-l"/>
                                            <div className="post-wrap-border-t-r"/>
                                        </div>
                                        <div className="wrap-area-w">
                                            <div className="area-textarea-w">
                                                <textarea value={value} onChange={this.onChange} className="textarea-fw textarea-bf" placeholder="有事没事说两句..."/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear-g wrap-action-w">
                                        <div className="action-function-w">
                                            <ul className="clear-g">
                                                <li className="function-face-w">
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
                                                <a><button className="btn-fw"/></a>
                                            </div>
                                        </div>
                                        <div className="cbox-prompt-w">
                                            <span className="prompt-empty-w">评论内容为空！</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-comment-empty-w"/>
                            <div className="list-close-comment-w"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentArea;