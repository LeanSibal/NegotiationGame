import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

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
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3"> {newPlayerObject[1]}</div>
                            <div className="col-sm-6">TABLE</div>
                            <div className="col-sm-3"> {newPlayerObject[2]}</div>
                            <div className="col-sm-12"> {this.props.players[newPlayerObject[0]].display_name}</div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Threeplayer