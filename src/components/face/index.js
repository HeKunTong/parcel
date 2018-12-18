import React, { Component } from 'react';

class Face extends Component {

    onClick = (e) => {
        const { callback } = this.props;
        const node = e.target;
        if (callback) {
            const value = `[${node.getAttribute("data-ubb")}]`;
            callback(value);
        }
    }

    render() {
        return (
            <div node-type="face-box" className="face-wrapper-dw">
                <div node-type="face-cont" className="wrapper-cont-dw">
                    <ul className="clear-g">
                        <li>
                            <span title="流汗" data_path="base" data-ubb="/流汗" className="face-item face_01" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="钱" data_path="base" data-ubb="/钱" className="face-item face_02" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="发怒" data_path="base" data-ubb="/发怒" className="face-item face_03" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="浮云" data_path="base" data-ubb="/浮云" className="face-item face_04" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="给力" data_path="base" data-ubb="/给力" className="face-item face_05" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="大哭" data_path="base" data-ubb="/大哭" className="face-item face_06" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="憨笑" data_path="base" data-ubb="/憨笑" className="face-item face_07" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="色" data_path="base" data-ubb="/色" className="face-item face_08" onClick={this.onClick}/>
                        </li>
                    </ul>
                    <ul className="clear-g">
                        <li>
                            <span title="奋斗" data_path="base" data-ubb="/奋斗" className="face-item face_09" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="鼓掌" data_path="base" data-ubb="/鼓掌" className="face-item face_10" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="鄙视" data_path="base" data-ubb="/鄙视" className="face-item face_11" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="可爱" data_path="base" data-ubb="/可爱" className="face-item face_12" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="闭嘴" data_path="base" data-ubb="/闭嘴" className="face-item face_13" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="疑问" data_path="base" data-ubb="/疑问" className="face-item face_14" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="抓狂" data_path="base" data-ubb="/抓狂" className="face-item face_15" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="惊讶" data_path="base" data-ubb="/惊讶" className="face-item face_16" onClick={this.onClick}/>
                        </li>
                    </ul>
                    <ul className="clear-g">
                        <li>
                            <span title="可怜" data_path="base" data-ubb="/可怜" className="face-item face_17" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="弱" data_path="base" data-ubb="/弱" className="face-item face_18" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="强" data_path="base" data-ubb="/强" className="face-item face_19" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="握手" data_path="base" data-ubb="/握手" className="face-item face_20" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="拳头" data_path="base" data-ubb="/拳头" className="face-item face_21" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="酒" data_path="base" data-ubb="/酒" className="face-item face_22" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="玫瑰" data_path="base" data-ubb="/玫瑰" className="face-item face_23" onClick={this.onClick}/>
                        </li>
                        <li>
                            <span title="打酱油" data_path="base" data-ubb="/打酱油" className="face-item face_24" onClick={this.onClick}/>
                        </li>
                    </ul>
                </div>
                <div node-type="face-tab" className="action-face-tab-dw">
                    <ul className="clear-g">
                        <li node-type="official-face" className="official-face-btn active"/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Face;