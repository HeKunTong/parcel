import React, { Component } from 'react';
import Face from '../face';
import Tag from './tag';
import CommentItem from './commentItem';
import map from 'lodash/map';

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
        const { comment } = this.props;
        const { show, value } = this.state;

        return (
            <div id="SOHUCS">
                <div id="SOHU_MAIN">
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
                                    <div className="list-comment-empty-w">
                                    </div>
                                    <div className="list-close-comment-w">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="module-cmt-list section-list-w">
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
                            <Tag name="热门评论"/>
                            <CommentItem comment={comment.hot}/>
                        </div>
                        <div className="list-block-gw list-newest-w">
                            <Tag name="最新评论"/>
                            <div id="cy-cmt-list">
                                {
                                    map(comment.recent, (recent, index) => <CommentItem comment={recent} key={index}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Comment.defaultProps = {
    comment: {
        hot: {
            avatar: "http://sucimg.itc.cn/avatarimg/849787402_1501140758502_c55",
            time: "2017年7月27日 15:32",
            name: "闰土在流浪",
            address: "江苏省扬州市",
            source: "网友",
            info: "请教一下，畅言必须要有ICP备案才能用，那用hexo+GitHub搭建的博客该怎么办呢",
            star: 1
        },
        recent: [{
            avatar: "http://sucimg.itc.cn/avatarimg/946276000_1517637211547_c55",
            time: "2018年2月3日 13:57",
            name: "THEFOOL",
            address: "山东省青岛市",
            source: "网友",
            info: "被验证码打哭的路过，学习到了tesseract识别验证码，嗯嗯，有收获[/鼓掌]",
        }]
    }
};

export default Comment;