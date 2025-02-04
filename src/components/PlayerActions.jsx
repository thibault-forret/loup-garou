import React from 'react';
import ActionItem from './ActionItem';

function PlayerActions() {

    return (
        <div className="icons-container">
            <ActionItem icon="crown" title="Maire" />
            <ActionItem icon="heart" title="En couple" />
            <ActionItem icon="potion-m" title="Potion de mort" />
            <ActionItem icon="potion-v" title="Potion de vie" />
        </div>
    );
}

export default PlayerActions;
