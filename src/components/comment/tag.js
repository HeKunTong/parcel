import React from 'react';

export default ({ name }) => (
    <div className="block-title-gw">
        <ul className="clear-g">
            <li>
                <div className="title-name-gw">
                    <div className="title-name-gw-tag"/>
                    { name }
                </div>
            </li>
        </ul>
    </div>
);