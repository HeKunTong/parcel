import React, { Component } from 'react';
import Face from '../face';
import { connect } from 'react-redux';
import collapsed from '../../redux/actions/collapsed';

class CommentArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: ""
        };
    }

    componentWillMount() {
        document.addEventListener("click", this.resolve());
    }

    resolve = () => (e) => {
        const dom = e.target;
        const btn = document.querySelector(".function-face-w");
        const faceBox = document.querySelector(".face-wrapper-dw");
        const { show } = this.state;
        if (show) {
            if (faceBox && !faceBox.contains(dom)) {
                this.setState({show: false});
            }
        } else {
            if (btn && btn.contains(dom)) {
                this.setState({show: true});
            }
        }
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onCallBack = (value) => {
        this.setState({value: this.state.value + value});
    }

    handleShow = () => {
        const { show } = this.props;
        show();
    }

    render() {

        const { user } = this.props;
        const { show, value } = this.state;

        return (
            <div className="module-cmt-header">
                {
                    user &&
                    <div className="clear-g section-title-w">
                        <div className="title-user-w">
                            <div className="clear-g user-wrap-w user-login">
                                <span className="wrap-name-w">{user.name}：</span>
                            </div>
                        </div>
                    </div>
                }
                <div className="section-cbox-w">
                    <div className="cbox-block-w clear-g">
                        <div className="block-head-w block-head-login">
                            {
                                user &&
                                <div className="head-img-w">
                                    <img src={user.avatar} alt="" onClick={this.handleShow}/>
                                </div>
                            }
                            {
                                !user &&
                                <div className="block-head-w block-head-login">
                                    <div className="header-login">登录</div>
                                </div>
                            }
                        </div>
                        <div className="block-post-w">
                            <div className="module-cmt-box">
                                <div className="post-wrap-w">
                                    <div className="post-wrap-border-l"/>
                                    <div className="post-wrap-border-r"/>
                                    <div className="post-wrap-main">
                                        <div className="post-wrap-border-t">
                                            <div className="post-wrap-border-t-l"/>
                                            <div className="post-wrap-border-t-r" style={{marginLeft: "125px"}}/>
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

export default connect(null, collapsed)(CommentArea);