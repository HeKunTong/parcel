import React, { Component } from 'react';

class CySex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sex: 0,
            age: "90"
        };
    }

    onChangeSex = (sex) => {
        this.setState({ sex });
    }

    onChangeAge = (age) => {
        this.setState({ age });
    }

    onFinish = () => {
        const { onChange } = this.props;
        onChange({ show: false });
    }

    render() {

        const { sex, age } = this.state;

        return (
            <div className="module-sex">
                <div className="sex-mask"/>
                <div className="first-come" style={{visibility: "hidden"}}/>
                <div className="sex-config">
                    <div className="sex-title">修改信息</div>
                    <div className="sex-center">
                        <div className="sex-header">
                            <div className="sex-select">
                                <div className="i-am">
                                    <span className="text">我是：</span>
                                    <span className={sex === 0 ? "boy select" : "boy" } onClick={() => this.onChangeSex(0)}>
                                        <span className="icon-boy"/>男
                                    </span>
                                    <span className={sex === 1 ? "girl select" : "girl" } onClick={() => this.onChangeSex(1)}>
                                        <span className="icon-girl"/>女
                                    </span>
                                </div>
                                <div className={`i-also-am ${sex === 0 ? "icon-man" : "icon-woman"}`}>
                                    <span className="text">也是：</span>
                                    <span className={age === "00" ? "icon select" : "icon"} onClick={() => this.onChangeAge("00")}>
                                        <span className="age-icon icon-00"/>
                                        <span className="icon-text">00后</span>
                                    </span>
                                    <span className={age === "90" ? "icon select" : "icon"} onClick={() => this.onChangeAge("90")}>
                                        <span className="age-icon icon-90"/>
                                        <span className="icon-text">90后</span>
                                    </span>
                                    <span className={age === "80" ? "icon select" : "icon"} onClick={() => this.onChangeAge("80")}>
                                        <span className="age-icon icon-80"/>
                                        <span className="icon-text">80后</span>
                                    </span>
                                    <span className={age === "70" ? "icon select" : "icon"} onClick={() => this.onChangeAge("70")}>
                                        <span className="age-icon icon-70"/>
                                        <span className="icon-text">70后</span>
                                    </span>
                                    <span className={age === "60" ? "icon select" : "icon"} onClick={() => this.onChangeAge("60")}>
                                        <span className="age-icon icon-60"/>
                                        <span className="icon-text">60后</span>
                                    </span>
                                    <span className={age === "50" ? "icon select" : "icon"} onClick={() => this.onChangeAge("50")}>
                                        <span className="age-icon icon-50"/>
                                        <span className="icon-text">50后</span>
                                    </span>
                                </div>
                                <div className="alldown">
                                    <span className="down-button" onClick={this.onFinish}>完成</span>
                                </div>
                                <div className="otherword">让小伙伴们更加了解你吧</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CySex;