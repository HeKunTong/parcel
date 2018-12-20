import React, { Component } from 'react';
import CommentArea from './commentArea';
import Tag from './tag';
import CommentItem from './commentItem';
import map from 'lodash/map';

class Comment extends Component {

    render() {
        const { comment } = this.props;
        return (
            <div id="SOHUCS">
                <div id="SOHU_MAIN">
                    <CommentArea />
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