import React, { Component } from 'react';
import map from 'lodash/map';

class CyFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    render() {

        const { questions } = this.props;
        const { show } = this.state;

        return (
            <div className="module-cy-user-feedback">
                <div className="main">
                    <div className="title">
                        帮助与反馈
                    </div>
                    <div className="form">
                        <p className="faq">常见问题:</p>
                        <ul className="faq-questions">
                            {
                                map(questions, (question, index) => <li className="faq-question" key={index}><span className="point"/>{question.name}</li>)
                            }
                        </ul>
                        <p className="question">问题反馈:</p>
                        <textarea cols="30" rows="10" className="questionCon" placeholder="请写下你在网站评论时，遇到的问题或建议。附上链接能帮我们更好地解决问题哦~"/>
                        <div className="link">
                            <span className="phone">联系方式:</span>
                            <span className="select">选填</span>
                            <input type="text" className="text" placeholder="QQ或手机"/>
                        </div>
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
                    {
                        show &&
                        <div className="tip">
                            <span className="ok"/>
                            <span className="tipText">您的反馈已提交给系统~</span>
                        </div>
                    }
                    <div className="button">
                        <span className="confirm">提交</span>
                    </div>
                </div>
            </div>
        )
    }
}

CyFeedback.defaultProps = {
    questions: [{
        name: "什么是畅言评论?"
    }, {
        name: "能否删除或修改自己的评论?"
    }, {
        name: "我的评论为什么被无故删除?"
    }, {
        name: "如何修改昵称头像?"
    }]
};

export default CyFeedback;