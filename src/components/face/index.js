import React, { Component } from 'react';
import { face } from '../../util';
import chunk from 'lodash/chunk';
import map from 'lodash/map';

class Face extends Component {

    onClick = (e) => {
        const { callback } = this.props;
        const node = e.target;
        if (callback) {
            const value = `[/${node.getAttribute("title")}]`;
            callback(value);
        }
    }

    getData = () => {
        return chunk(face, 8);
    }

    render() {
        const data = this.getData();
        return (
            <div node-type="face-box" className="face-wrapper-dw">
                <div node-type="face-cont" className="wrapper-cont-dw">
                    {
                        map(data, (item, index) => (
                            <ul className="clear-g" key={index}>
                                {
                                    map(item, (faceItem) => (
                                        <li key={faceItem.name}>
                                            <span title={faceItem.title} className={`face-item ${faceItem.name}`} onClick={this.onClick}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
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