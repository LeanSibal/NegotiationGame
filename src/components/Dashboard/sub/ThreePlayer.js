import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';
import Profile from './Profile';
import Gametable from './Gametable';

class Threeplayer extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            players: null
        }
    }

    componentDidMount() {


    }

    render() {

        let newPlayerObject = {};
        let playerObject = this.props.players;
        let userId = this.props.userId;
        let counter = 1;
        Object.keys(playerObject).map((key) => {
            if(playerObject[key].player_id === userId){
                newPlayerObject[0] = key;
            }else{
                newPlayerObject[counter] = key;
                counter++;
            }
        });

        return (
            <Aux>
                <div className="container">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3 text-center vertical-middle"><Profile player={this.props.players[newPlayerObject[1]]} /></div>
                            <div className="col-sm-6 text-center">
                                <Gametable players={this.props.players} gameType="3" playerKeys={newPlayerObject} />
                            </div>
                            <div className="col-sm-3 text-center vertical-middle"><Profile player={this.props.players[newPlayerObject[2]]} /></div>
                            <div className="col-sm-12 text-center"> <Profile player={this.props.players[newPlayerObject[0]]} /></div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Threeplayer