import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

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

        return (
            <div className="row">
                <div className="col-sm-4">
                    {this.shortenPlayerName(player[this.props.playerKeys[1]].display_name)}
                </div>
                <div className="col-sm-4">
                    {this.shortenPlayerName(player[this.props.playerKeys[0]].display_name)}
                </div>
                <div className="col-sm-4">
                    {this.shortenPlayerName(player[this.props.playerKeys[2]].display_name)}
                </div>
            </div>
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


export default Gametable
