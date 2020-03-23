import React from 'react';

const rerollPerk = (props) => {
    if(props.survivorPerks.includes(props.perk)){
        const allPerks = [...props.survivorPerks];
        const newPerks = [...props.currentPerks];
        const filteredPerks = filterArray(allPerks, newPerks);
        replacePerk(newPerks, filteredPerks, props.perk);
        props.getPerks(newPerks);
        
    } else if(props.killerPerks.includes(props.perk)){
        const allPerks = [...props.killerPerks];
        const newPerks = [...props.currentPerks];
        const filteredPerks = filterArray(allPerks, newPerks);
        replacePerk(newPerks, filteredPerks, props.perk);
        props.getPerks(newPerks);
    }
}

const filterArray = (allPerks, newPerks) => {
    const filteredPerks = [];
    for(let i = 0; i < allPerks.length; i++){
        if(!newPerks.includes(allPerks[i])){
            filteredPerks.push(allPerks[i]);
        }
    }
    return filteredPerks;
}

function replacePerk(newPerks, filteredPerks, perk){
    let randNum = Math.floor(Math.random() * filteredPerks.length);
    for(let i = 0; i < newPerks.length; i++){
        if(newPerks[i] === perk){
            newPerks[i] = filteredPerks[randNum];
        }
    }
}

const rerollButton = (props) => (
    <div className="GeneratePerks" >
        <button onClick={() => rerollPerk(props)}>Reroll Perk</button>
    </div>
);

export default rerollButton;