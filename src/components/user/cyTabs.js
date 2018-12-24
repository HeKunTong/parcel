import React, { Component } from 'react';

class CyTabs extends Component {

    onClick = (key) => {
        const { selectedKey, onChange } = this.props;
        if (selectedKey !== key) {
            onChange({selectedKey: key});
        }
    }

    render() {

        const { selectedKey } = this.props;

        return (
            <div className="cy-user-page-tab">
                <ul className="cy-tab-list">
                    <li className={selectedKey === "my" ? "info-li active" : "info-li"} style={{ position: "relative"}} onClick={() => this.onClick("my")}>
                        <span className="cy-tab-icon cy-my-ico"/>
                        <i>我的</i>
                        <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                    </li>
                    <li className={selectedKey === "task" ? "info-li active" : "info-li"} style={{ position: "relative"}} onClick={() => this.onClick("task")}>
                        <span className="cy-tab-icon cy-task-ico"/>
                        <i className="task-text">任务</i>
                        <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                    </li>
                    <li className={selectedKey === "notice" ? "notice-li active" : "notice-li"} style={{ position: "relative"}} onClick={() => this.onClick("notice")}>
                        <span className="cy-tab-icon cy-notice-ico"/>
                        <i>通知</i>
                        <div className="module-cmt-notice-dot" style={{ display: "none"}}/>
                    </li>
                    <li className={selectedKey === "feedback" ? "feedback-li active" : "feedback-li"} style={{ position: "relative"}} onClick={() => this.onClick("feedback")}>
                        <span className="cy-tab-icon cy-feedback-ico"/>
                        <i className="feedback-text">反馈</i>
                    </li>
                    <li className={selectedKey === "set" ? "set-li active" : "set-li"} onClick={() => this.onClick("set")}>
                        <span className="cy-tab-icon cy-set-ico"/>
                        <i className="set-text">设置</i>
                    </li>
                </ul>
                <div className="power-by-cy"/>
            </div>
        )
    }

}

export default CyTabs;