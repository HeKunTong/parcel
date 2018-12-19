import React, { Component } from 'react';
import { resolveFace } from '../../util';
import map from 'lodash/map';

class CommentItem extends Component {
    render() {
        const { comment } = this.props;
        return (
            <div className="clear-g block-cont-gw">
                <div className="cont-head-gw">
                    <div className="head-img-gw">
                        <a title={comment.name}>
                            <div className="img-corner"/>
                            <img src={comment.avatar} width="42" height="42" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="cont-msg-gw">
                    <div className="msg-wrap-gw">
                        <div className="wrap-user-gw global-clear-spacing">
                            <span className="user-time-gw">{comment.time}</span>
                            <span className="user-name-gw"><a>{comment.name}</a></span>
                            <span className="user-address-gw">[<i>{comment.address}</i>{comment.source}]</span>
                        </div>
                        <div className="wrap-issue-gw">
                            <p className="issue-wrap-gw"><span className="wrap-word-gw" dangerouslySetInnerHTML={{__html: resolveFace(comment.info)}}/></p>
                            <div className="cy-see-more">
                                <span/><i/>
                            </div>
                        </div>
                        <div className="clear-g wrap-action-gw">
                            <div className="action-click-gw global-clear-spacing">
                                <i className="gap-gw"/>
                                <span className="click-report-gw">
                                    <a><i className="icon-gw icon-flag"/><em>举报</em></a>
                                </span>
                                <i className="gap-gw"/>
                                <span className="click-reply-gw"><a>回复</a></span>
                                <i className="gap-gw"/>
                                <span className="click-ding-gw">
                                    <a><i className="icon-gw icon-ding-bg"/>{comment.star && <em className="icon-name-bg">{comment.star}</em>}</a>
                                </span>
                                <i className="gap-gw"/>
                                <span className="click-prop-gw">
                                    <span className="prop-span">
                                        <a/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem;