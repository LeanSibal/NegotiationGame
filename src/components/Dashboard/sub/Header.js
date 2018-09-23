import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

class Header extends  Component {

    constructor(props) {
        super(props);
    }

   

    render() {
        return (
            <Aux>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="https://dummyimage.com/60x60/000/fff"/>
                    </div>
                    <div className="col-sm-6 align-center">
                        <span className="align-middle">LEVEL {this.props.gameRound}</span>
                    </div>
                    <div className="col-sm-3">
                        Scores {this.props.gameScore}
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameScore: state.gameScore,
        gameRound: state.gameRound
    }
}

export default  connect(mapStateToProps)(Header)