import React from 'react';

function ActionItem({ icon, title }) {

    return (
        <div className={`icon icon-${icon}`} title={title}></div>
    );
}

export default ActionItem;
