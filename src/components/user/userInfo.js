import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div className="module-cy-user-info" style={{display: "block"}}>
                <div className="cy-user-info-header clear-g">
                    <div className="cy-user-photo-container">
                        <img className="cy-user-photo" src="http://sucimg.itc.cn/avatarimg/10106078459859_1545038887446_c55"/>
                        <div className="avatar-mask">修改头像</div>
                    </div>
                    <div className="cy-user-info">
                        <div className="cy-user-info-txt">
                            <em className="cy-user-name">blank</em>
                            <input className="cy-user-name-input" type="text"/>
                            <span className="cy-user-edit"/>
                            <div className="cy-user-edit-btn">确定</div>
                        </div>
                        <div className="cy-user-sex">
                            <span className="cy-user-sex-gender cy-user-sex-gender-1-age-1980"/>
                            <span className="cy-user-sex-age">80后·男</span>
                            <span className="cy-user-sex-update">点击修改</span>
                        </div>
                    </div>
                </div>
                <div className="cy-user-my">
                    <ul className="cy-my-label clear-g">
                        <li className="active">
                            <div className="cy-my-label-item"><span className="cy-num">0</span> 评论</div>
                        </li>
                        <li>
                            <div className="cy-my-label-item" style={{position: "relative"}}><span
                                className="cy-num">0</span> 收藏
                                <div className="module-cmt-notice-bubble" style={{display: "none"}}>0</div>
                            </div>
                        </li>
                        <li>
                            <div className="cy-my-label-item" style={{position: "relative"}}><span
                                className="cy-num">0</span> 回复
                                <div className="module-cmt-notice-bubble" style={{display: "none"}}>0</div>
                            </div>
                        </li>
                    </ul>
                    <div className="cy-tab-active-bar"/>
                    <div className="cy-my-page-container">
                        <div className="cy-my-page cy-my-page-comment active" style={{height: 816}}>
                            <ul className="cy-my-comment-list">
                                <div className="empty-hold-place">
                                    <div className="pet-pic"/>
                                    <div className="empty-txt comment-empty-txt"/>
                                    <div className="power-by-cy-txt"/>
                                </div>
                            </ul>
                        </div>
                        <div className="cy-my-page cy-my-page-collect" style={{height: 816}}>
                            <ul className="cy-my-comment-list">

                            </ul>
                        </div>
                        <div className="cy-my-page cy-my-page-reply" style={{height: 816}}>
                            <ul className="cy-my-comment-list">
                                <div className="empty-hold-place">
                                    <div className="pet-pic"/>
                                    <div className="empty-txt replay-empty-txt"/>
                                    <div className="power-by-cy-txt"/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;