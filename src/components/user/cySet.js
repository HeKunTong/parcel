import React, { Component } from 'react';

class CySet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reply: true,
            like: true,
            task: true,
            report: true
        };
    }

    onChange = (key) => {
        const state = this.state[key];
        this.setState({[key]: !state});
    }

    render() {

        const { reply, like, task, report } = this.state;

        return (
            <div className="module-cy-user-set">
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
                        <li className="setlist" onClick={() => this.onChange('reply')}>
                            <span className="cy-set-tag">回复提醒</span>
                            <span className={reply ? 'cy-switch cy-checked' : 'cy-switch'}/>
                        </li>
                        <li className="setlist"  onClick={() => this.onChange('like')}>
                            <span className="cy-set-tag">点赞提醒</span>
                            <span className={like ? 'cy-switch cy-checked' : 'cy-switch'}/>
                        </li>
                        <li className="setlist"  onClick={() => this.onChange('task')}>
                            <span className="cy-set-tag">任务完成提醒</span>
                            <span className={task ? 'cy-switch cy-checked' : 'cy-switch'}/>
                        </li>
                        <li className="setlist"  onClick={() => this.onChange('report')}>
                            <span className="cy-set-tag">举报结果提醒</span>
                            <span className={report ? 'cy-switch cy-checked' : 'cy-switch'}/>
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
        )
    }
}

export default CySet;