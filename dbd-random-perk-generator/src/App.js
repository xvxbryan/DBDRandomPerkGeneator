import React, { Component } from 'react';
import './App.css';
import KillerPerks from './components/KillerPerks/KillerPerks';
import SurvivorPerks from './components/SurvivorPerks/SurvivorPerks';
import ShowPerks from './components/ShowPerks/ShowPerks';
import RerollButton from './components/RerollButton/RerollButton';

class App extends Component {

  state = {
    perks: [],
    killerPerks: [],
    survivorPerks: []
  };

  getKillerPerks(){
      fetch("http://localhost:3000/killerPerks")
          .then(res => res.json())
          .then(res => this.setState({killerPerks: res}))
  }

  getSurvivorPerks(){
    fetch("http://localhost:3000/survivorperks")
        .then(res => res.json())
        .then(res => this.setState({survivorPerks: res}))
  }

  componentDidMount(){
    this.getKillerPerks();
    this.getSurvivorPerks();
  }

  getPerks = (randomPerks) => {
    this.setState({perks: randomPerks});
  }
 
  render() {
    return (
      <div>
        <div className="App">
          <div className="PerkButtons">
            <KillerPerks
              killerPerks={this.state.killerPerks} 
              getPerks={this.getPerks}/>
          </div>
          <div className="PerkButtons">
            <SurvivorPerks 
              survivorPerks={this.state.survivorPerks}
              getPerks={this.getPerks}/>
          </div> 
        </div>
        <div className="PerksContainer">
          <div className="Perks">
            {
              this.state.perks.map((perk, index) => {
                return (
                  <div className="PerkName" key={index}>
                      <ShowPerks perk={perk}/>

                      <RerollButton 
                        perk={perk}
                        killerPerks={this.state.killerPerks}
                        survivorPerks={this.state.survivorPerks}
                        currentPerks={this.state.perks}
                        getPerks={this.getPerks}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
