import React from 'react';

const showPerks = (props) => (
    <div>
        <p><strong>{props.perk.perkName}</strong></p>
        <img alt='' src={props.perk.perkImage}/>
    </div>
);

export default showPerks;