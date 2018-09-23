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
            gameState : null,
            hasGameId: false,
            gameId: props.gameId,
            isLoading: true
        };

        this.database = firebase.database();
    }

    componentDidMount() {

        let userId = localStorage.getItem('userId');
        let root = this;
        this.database.ref('users/' + userId).on('value', function (snapshot) {
            root.setState({
                hasGameId: snapshot.hasChild('current_game_id'),
                gameId: snapshot.child('current_game_id').val(),
                isLoading: false
            })
        })
    }

    render() {

        return (
            <Aux>
                <div className="dashboard">
                    {this.state.hasGameId && !this.state.isLoading &&
                        <Room gameId={this.state.gameId}/>
                    }
                    {!this.state.hasGameId && !this.state.isLoading &&
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


export default connect(mapStateToProps)(dashboard);