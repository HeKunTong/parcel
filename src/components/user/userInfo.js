import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editShow: false,
            tabKey: "comment"
        };
    }

    onEditShow = () => {
        this.setState({editShow: true});
    }

    onEditUnShow = () => {
        this.setState({editShow: false});
    }

    onShow = () => {
        const {  onChange } = this.props;
        onChange({show: true});
    }

    onChangeTab = (tabKey) => {
        this.setState({ tabKey });
    }

    render() {

        const { editShow, tabKey } = this.state;

        return (
            <div className="module-cy-user-info">
                <div className="cy-user-info-header clear-g">
                    <div className="cy-user-photo-container">
                        <img className="cy-user-photo" src="http://sucimg.itc.cn/avatarimg/10106078459859_1545038887446_c55"/>
                        <div className="avatar-mask">修改头像</div>
                    </div>
                    <div className="cy-user-info">
                        <div className="cy-user-info-txt">
                            { !editShow &&  <em className="cy-user-name">blank</em> }
                            { !editShow &&  <span className="cy-user-edit" onClick={this.onEditShow}/> }
                            { editShow && <input className="cy-user-name-input" type="text"/> }
                            { editShow && <div className="cy-user-edit-btn" onClick={this.onEditUnShow}>确定</div> }
                        </div>
                        <div className="cy-user-sex">
                            <span className="cy-user-sex-gender cy-user-sex-gender-1-age-1980"/>
                            <span className="cy-user-sex-age">80后·男</span>
                            <span className="cy-user-sex-update" onClick={this.onShow}>点击修改</span>
                        </div>
                    </div>
                </div>
                <div className="cy-user-my">
                    <ul className="cy-my-label clear-g">
                        <li className={tabKey === "comment" ? "active" : ""} onClick={() => this.onChangeTab("comment")}>
                            <div className="cy-my-label-item"><span className="cy-num">0</span> 评论</div>
                        </li>
                        <li className={tabKey === "collect" ? "active" : ""} onClick={() => this.onChangeTab("collect")}>
                            <div className="cy-my-label-item" style={{position: "relative"}}><span
                                className="cy-num">0</span> 收藏
                                <div className="module-cmt-notice-bubble" style={{display: "none"}}>0</div>
                            </div>
                        </li>
                        <li className={tabKey === "reply" ? "active" : ""} onClick={() => this.onChangeTab("reply")}>
                            <div className="cy-my-label-item" style={{position: "relative"}}><span
                                className="cy-num">0</span> 回复
                                <div className="module-cmt-notice-bubble" style={{display: "none"}}>0</div>
                            </div>
                        </li>
                    </ul>
                    <div className="cy-tab-active-bar" style={{marginLeft: tabKey === "comment" ? 63 : tabKey === "collect" ? 273 : 483}}/>
                    <div className="cy-my-page-container">
                        {
                            tabKey === "comment" &&
                            <div className="cy-my-page cy-my-page-comment" style={{height: 816}}>
                                <ul className="cy-my-comment-list">
                                    <div className="empty-hold-place">
                                        <div className="pet-pic"/>
                                        <div className="empty-txt comment-empty-txt"/>
                                        <div className="power-by-cy-txt"/>
                                    </div>
                                </ul>
                            </div>
                        }
                        {
                            tabKey === "collect" &&
                            <div className="cy-my-page cy-my-page-collect" style={{height: 816}}>
                                <ul className="cy-my-comment-list">

                                </ul>
                            </div>
                        }
                        {
                            tabKey === "reply" &&
                            <div className="cy-my-page cy-my-page-reply" style={{height: 816}}>
                                <ul className="cy-my-comment-list">
                                    <div className="empty-hold-place">
                                        <div className="pet-pic"/>
                                        <div className="empty-txt reply-empty-txt"/>
                                        <div className="power-by-cy-txt"/>
                                    </div>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;