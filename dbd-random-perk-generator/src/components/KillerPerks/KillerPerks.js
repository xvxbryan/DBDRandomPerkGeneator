import React from 'react';
import GeneratePerksButton from '../GeneratePerksButton/GeneratePerksButton';


const generateKillerPerks = (props) => (
    <div>
        <GeneratePerksButton
            buttonName="Generate Killer Perks"
            perks={props.killerPerks}
            getPerks={props.getPerks}/>
    </div>
);

export default generateKillerPerks;