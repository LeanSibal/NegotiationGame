import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import firebase from '../../firebase';
import PlayerList from './PlayerList';
import SearchPlayer from './SearchPlayer';

class room extends  Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Aux>
                <div className="game-room">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <img src="https://dummyimage.com/60x60/000/fff"/>
                            <h5>Choose Players</h5>
                        </div>
                    </div>
                    <div className="row">
                       <SearchPlayer />
                    </div>
                    <div className="row">
                        <PlayerList />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center text-uppercase">
                            <button className="start-game">START GAME</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}



export default room;