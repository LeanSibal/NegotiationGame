import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';
import Playermove from './Playermove';

class Gametable extends Component {

    constructor(props){
        super(props)

        this.gameForThree = this.gameForThree.bind(this)
        this.gameForFive = this.gameForFive.bind(this)
    }

    shortenPlayerName(name) {
        let playerNameSplit = name.split(' ');
        return playerNameSplit[0];
    }

    gameForThree(){
        let player = this.props.players;
        let gameRound = this.props.gameActions[this.props.gameRound];
        return (
          <section>
              <div className="row game-table">
                  <div className="col-sm-4">
                      <Playermove
                      playerName={this.shortenPlayerName(player[this.props.playerKeys[1]].display_name)}
                      playerAction={gameRound[player[this.props.playerKeys[1]].player_id]}
                      />
                  </div>
                  <div className="col-sm-4">
                      <Playermove
                          playerName={this.shortenPlayerName(player[this.props.playerKeys[0]].display_name)}
                          playerAction={gameRound[player[this.props.playerKeys[0]].player_id]}
                      />
                  </div>
                  <div className="col-sm-4">
                      <Playermove
                          playerName={this.shortenPlayerName(player[this.props.playerKeys[2]].display_name)}
                          playerAction={gameRound[player[this.props.playerKeys[2]].player_id]}
                      />
                  </div>
              </div>
          </section>
        )
    }

    gameForFive(){
        
    }

    render() {

        return (
            <Aux>
                {this.props.gameType == 3 &&
                    this.gameForThree()
                }
                {this.props.gameType == 5 &&
                this.gameForFive()
                }
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameActions: state.gameActions,
        gameRound: state.gameRound
    }
}


export default connect(mapStateToProps)(Gametable)
