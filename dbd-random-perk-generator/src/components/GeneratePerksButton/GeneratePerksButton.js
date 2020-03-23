import React, { Component } from 'react';
import './GeneratePerksButton.css'

class generatePerksButton extends Component {
    randomPerks = [];

    state = {
        buttonClicked: false
    }

    generatePerks = (props) => {
        this.setState({buttonClicked: true})
        this.randomPerks = this.randomizePerks(props.perks)
    }

    randomizePerks = (perks) => {
        const randomPerks = [];
    
        let randNum = Math.floor(Math.random() * perks.length);
    
        while (randomPerks.length < 4){
            if(!randomPerks.includes(perks[randNum])) {
                randomPerks.push(perks[randNum]);
            }
            randNum = Math.floor(Math.random() * perks.length);
        }
        this.props.getPerks(randomPerks);
        return randomPerks;
    }

    render() {
        return (
            <div className="GeneratePerks">
                <button onClick={() => this.generatePerks(this.props)}>{this.props.buttonName}</button>
            </div>
        )
    }
}

export default generatePerksButton;