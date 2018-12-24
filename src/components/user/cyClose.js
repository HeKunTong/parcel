import React, { Component } from 'react';
import { connect } from 'react-redux';
import collapsed from '../../redux/actions/collapsed';

class CyClose extends Component {

    onClose = () => {
        const { hide } = this.props;
        hide();
    }

    render() {
        return (
            <div className="cy-user-page-close-btn" onClick={this.onClose}/>
        )
    }
}

export default connect(({ collapsed }) => ({ collapsed }), collapsed)(CyClose);