import React from 'react';
import GeneratePerksButton from '../GeneratePerksButton/GeneratePerksButton';

const generateSurvivorPerks = (props) => (
    <div>
        <GeneratePerksButton
            buttonName="Generate Survivor Perks"
            perks={props.survivorPerks}
            getPerks={props.getPerks}/>
    </div>
);

export default generateSurvivorPerks;