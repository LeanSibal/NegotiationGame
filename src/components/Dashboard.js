import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Creategame from './Dashboard/Creategame';
import Room from './Dashboard/Room';
import firebase from '../firebase';

class dashboard extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState : null
        };
        this.database = firebase.database();
    }

    componentDidMount(){
        let gameId = localStorage.getItem('gameId');
        var $root = this;
        this.database.ref('games/' + gameId).on('value', function (snapshot) {
            $root.props.checkGame(gameId, snapshot);
        })
    }

    render() {
        return (
            <Aux>
                <div className="dashboard">
                    {this.props.gameState === 'waiting' &&
                        <Room />
                    }
                    {this.props.gameState === null &&
                        <Creategame />
                    }
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        gameState: state.gameState,
        displayName: state.displayName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkGame: (gameId, snapshot) => dispatch(actions.checkGame(gameId,  snapshot))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);