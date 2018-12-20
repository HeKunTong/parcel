import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <div className="module-cy-user-page module-cy-user-page-mine" style={{height: 969, right: 0}}>
                <div className="cy-user-page-main">
                    <div className="module-cy-user-info" style={{display: "block"}}>
                        <div className="cy-user-info-header clear-g">
                            <div className="cy-user-photo-container">
                                <img className="cy-user-photo"
                                     src="http://sucimg.itc.cn/avatarimg/10106078459859_1545038887446_c55"/>
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
                    <div className="module-sex" style={{display: "none"}}>
                        <div className="sex-mask">
                        </div>
                        <div/>
                        <div className="first-come" style={{visibility: "hidden"}}>
                        </div>
                        <div className="sex-config">
                            <div className="sex-title">
                                修改信息
                            </div>
                            <div className="sex-center">
                                <div className="sex-header">
                                    <div className="sex-select">
                                        <div className="i-am">
                                            <span className="text">我是：</span>
                                            <span className="boy select" value="1">
                                        <span className="icon-boy"/>男
                                        </span>
                                            <span className="girl" value="0">
                                        <span className="icon-girl"/>女
                                        </span>
                                        </div>
                                        <div className="i-also-am icon-man">
                                            <span className="text">也是：</span>
                                            <span className="icon" value="2000">
                                            <span className="age-icon icon-00"/>
                                            <span className="icon-text">00后</span>
                                        </span>
                                            <span className="icon" value="1990">
                                            <span className="age-icon icon-90"/>
                                            <span className="icon-text">90后</span>
                                        </span>
                                            <span className="icon select" value="1980">
                                            <span className="age-icon icon-80"/>
                                            <span className="icon-text">80后</span>
                                        </span>
                                            <span className="icon" value="1970">
                                            <span className="age-icon icon-70"/>
                                            <span className="icon-text">70后</span>
                                        </span>
                                            <span className="icon" value="1960">
                                            <span className="age-icon icon-60"/>
                                            <span className="icon-text">60后</span>
                                        </span>
                                            <span className="icon" value="1950">
                                            <span className="age-icon icon-50"/>
                                            <span className="icon-text">50后</span>
                                        </span>
                                        </div>
                                        <div className="alldown">
                                            <span className="down-button">完成</span>
                                        </div>
                                        <div className="otherword">让小伙伴们更加了解你吧</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="module-cy-user-task" style={{display: "none"}}/>
                    <div className="module-cy-user-feedback" style={{display: "none"}}>
                        <div className="main">
                            <div className="title">
                                帮助与反馈
                            </div>
                            <div className="form">
                                <p className="faq">常见问题:</p>
                                <ul className="faq-questions">
                                    <li className="faq-question"><span className="point"/>什么是畅言评论?</li>
                                    <li className="faq-question"><span className="point"/>能否删除或修改自己的评论?</li>
                                    <li className="faq-question"><span className="point"/>我的评论为什么被无故删除?</li>
                                    <li className="faq-question"><span className="point"/>如何修改昵称头像?</li>
                                </ul>
                                <p className="question">问题反馈:</p>
                                <textarea cols="30" rows="10" className="questionCon"
                                          placeholder="请写下你在网站评论时，遇到的问题或建议。附上链接能帮我们更好地解决问题哦~"/>
                                <div className="link">
                                    <span className="phone">联系方式:</span>
                                    <span className="select">选填</span>
                                    <input type="text" className="text" placeholder="QQ或手机"/>
                                </div>
                                <div>
                                    <div className="photo">
                                        <span className="add-img">插入图片:</span>
                                        <span className="select">选填</span>
                                        <div className="img-container">
                                    <span className="upload-img" style={{position: "relative"}}>
                                        <span style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: 80,
                                            width: 80,
                                            overflow: "hidden",
                                            opacity: 0.1,
                                            filter: "alpha(opacity=10)"
                                        }}>
                                            <object id="SWFUpload_0" type="application/x-shockwave-flash"
                                                    data="http://changyan.itc.cn/mdevp/extensions/cui/002/swfupload.v2.2.0/swfupload.swf"
                                                    width="80" height="80" className="swfupload">
                                                <param name="wmode" value="transparent"/>
                                                <param name="movie"
                                                       value="http://changyan.itc.cn/mdevp/extensions/cui/002/swfupload.v2.2.0/swfupload.swf"/>
                                                <param name="quality" value="high"/>
                                                <param name="menu" value="false"/>
                                                <param name="allowScriptAccess" value="always"/>
                                                <param name="flashvars"
                                                       value="movieName=SWFUpload_0&amp;uploadURL=http%3A%2F%2Fchangyan.sohu.com%2Fapi%2F2%2Fcomment%2Fattachment&amp;useQueryString=false&amp;requeueOnError=false&amp;httpSuccess=&amp;assumeSuccessTimeout=0&amp;params=&amp;filePostName=file&amp;fileTypes=*.jpg%3B*.png%3B*.gif%3B*.jpeg&amp;fileTypesDescription=All%20Files&amp;fileSizeLimit=2%20MB&amp;fileUploadLimit=0&amp;fileQueueLimit=0&amp;debugEnabled=false&amp;buttonImageURL=http%3A%2F%2Fchangyan.itc.cn%2Fmdevp%2Fextensions%2Fcui%2F002%2Fswfupload.v2.2.0%2Fswfupload.js%3Fbutton_image_url&amp;buttonWidth=80&amp;buttonHeight=80&amp;buttonText=&amp;buttonTextTopPadding=0&amp;buttonTextLeftPadding=0&amp;buttonTextStyle=color%3A%20%23000000%3B%20font-size%3A%2016pt%3B&amp;buttonAction=-110&amp;buttonDisabled=false&amp;buttonCursor=-2"/>
                                            </object>
                                        </span>
                                    </span>
                                        </div>
                                        <span className="img-upload-tip">图片最多可以插入9张</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tip">
                                <span className="ok"/>
                                <span className="tipText">
                            您的反馈已提交给系统~
                        </span>
                            </div>
                            <div className="button">
                                <span className="confirm">提交</span>
                            </div>
                        </div>
                    </div>
                    <div className="module-cy-user-set" style={{display: "none"}}>
                        <div className="set-header-s">
                            <div className="set-logout-s">
                                <div className="logout-ico"/>
                                退出登录
                            </div>
                            <div className="set-title-s">系统设置</div>
                        </div>
                        <div className="set-container-s">
                            <p className="set-remind">消息提醒设置
                            </p>
                            <ul className="setlists">
                                <li className="setlist">
                                    <span className="cy-set-tag">回复提醒</span>
                                    <span className="cy-switch cy-checked"/>
                                </li>
                                <li className="setlist">
                                    <span className="cy-set-tag">点赞提醒</span>
                                    <span className="cy-switch cy-checked"/>
                                </li>
                                <li className="setlist">
                                    <span className="cy-set-tag">任务完成提醒</span>
                                    <span className="cy-switch cy-checked"/>
                                </li>
                                <li className="setlist">
                                    <span className="cy-set-tag">举报结果提醒</span>
                                    <span className="cy-switch cy-checked"/>
                                </li>
                            </ul>
                            <p className="set-remind">手机绑定设置
                            </p>
                            <p className="set-phone">
                    <span className="set-phone-done" style={{display: "none"}}>
                        <span className="set-phone-text"/>
                        <span className="set-phone-btn">解除绑定 &gt;</span>
                        <span className="set-phone-hint">*无法解绑？加群<em>461465718</em>咨询</span>
                    </span>
                                <span className="set-phone-no">
                        <span className="set-phone-text">未绑定手机号</span>
                        <span className="set-phone-btn">设置绑定 &gt;</span>
                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="module-cy-user-notice" style={{ display: "none"}}>
                        <div className="notice-title">通知消息</div>
                        <div className="notice-info" style={{ height: 908}}>
                            <div className="notice-empty"/>
                        </div>
                    </div>
                </div>
                <div className="cy-user-page-tab">
                    <ul className="cy-tab-list">
                        <li className="info-li active" style={{ position: "relative"}}>
                            <span className="cy-tab-icon cy-my-ico"/>
                            <i>我的</i>
                            <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                        </li>
                        <li className="task-li" style={{ display: "none"}}>
                            <span className="cy-tab-icon cy-task-ico"/>
                            <i className="task-text">任务</i>
                            <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                        </li>
                        <li className="notice-li" style={{ position: "relative"}}>
                            <span className="cy-tab-icon cy-notice-ico"/>
                            <i>通知</i>
                            <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                        </li>
                        <li className="feedback-li">
                            <span className="cy-tab-icon cy-feedback-ico"/>
                            <i className="feedback-text">反馈</i>
                        </li>
                        <li className="set-li">
                            <span className="cy-tab-icon cy-set-ico"/>
                            <i className="set-text">设置</i>
                        </li>
                    </ul>
                    <div className="power-by-cy"/>
                </div>
                <div className="cy-user-page-close-btn"/>
            </div>
        )
    }

}

export default User;