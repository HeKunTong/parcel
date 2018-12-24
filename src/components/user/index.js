import React, { Component } from 'react';
import CyTabs from './cyTabs';
import UserInfo from './userInfo';
import CySex from './cySex';
import CyTask from './cyTask';
import CyNotice from './cyNotice';
import CyFeedback from './cyFeedback';
import CySet from './cySet';
import CyClose from './cyClose';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "my",
            show: false
        };
    }

    onChange = (params = {}) => {
        this.setState(params);
    }

    render() {

        const { selectedKey, show } = this.state;

        return (
            <div className="module-cy-user-page module-cy-user-page-mine" style={{height: 969, right: 0}}>
                <div className="cy-user-page-main">
                    {
                        selectedKey === "my" && <UserInfo onChange={this.onChange}/>
                    }
                    {
                        selectedKey === "task" && <CyTask />
                    }
                    {
                        selectedKey === "notice" && <CyNotice/>
                    }
                    {
                        selectedKey === "feedback" && <CyFeedback />
                    }
                    {
                        selectedKey === "set" && <CySet/>
                    }
                    {
                        show && <CySex onChange={this.onChange}/>
                    }
                </div>
                <CyTabs selectedKey={selectedKey} onChange={this.onChange}/>
                <CyClose />
            </div>
        )
    }

}

export default User;