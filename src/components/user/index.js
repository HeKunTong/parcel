import React, { Component } from 'react';
import CyTabs from './cyTabs';
import UserInfo from './userInfo';
import CyTask from './cyTask';
import CyNotice from './cyNotice';
import CyFeedback from './cyFeedback';
import CySet from './cySet';
import CyClose from './cyClose';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "my"
        };
    }

    onChange = (params = {}) => {
        this.setState(params);
    }

    render() {

        const { selectedKey } = this.state;

        return (
            <div className="module-cy-user-page module-cy-user-page-mine" style={{height: 969, right: 0}}>
                <div className="cy-user-page-main">
                    {
                        selectedKey === "my" &&
                        <UserInfo />
                    }
                    {
                        selectedKey === "task" &&
                        <CyTask />
                    }
                    {
                        selectedKey === "notice" &&
                        <CyNotice/>
                    }
                    {
                        selectedKey === "feedback" &&
                        <CyFeedback />
                    }
                    {
                        selectedKey === "set" &&
                        <CySet/>
                    }
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
                </div>
                <CyTabs selectedKey={selectedKey} onChange={this.onChange}/>
                <CyClose />
            </div>
        )
    }

}

export default User;