import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import firebase from '../../firebase';
import Header from './sub/Header';
import Threeplayer from './sub/ThreePlayer';
import Fiveplayer from './sub/FivePlayer';
import Footer from './sub/Footer';


class Gameboard extends  Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Aux>
               <Header />
                {this.props.gameType == 3 &&
                    <Threeplayer userId={this.props.userId} players={this.props.players}  />
                }
                {this.props.gameType == 5 &&
                    <Fiveplayer userId={this.props.userId} players={this.props.players} />
                }
               <Footer />
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameType: state.gameType,
        players: state.players,
        userId: state.userId
    }
}



export default connect(mapStateToProps)(Gameboard)