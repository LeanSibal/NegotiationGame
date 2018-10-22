import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Header/Timer';
import Roundloader from './Header/Roundloader';
import logo from '../../../assets/img/Logo.png';
import pattern from '../../../assets/img/pattern.png';

class Header extends  Component {

    constructor(props) {
        super(props);
    }

    render() {

        const styles = {
            backgroundImage: `url(${pattern})`
        }

        return (
                <header  className="header-bg" style={styles}>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="col-sm-6 timer-wrapper">
                           <div className="top-container align-center">
                               <span className="align-middle">LEVEL {this.props.gameRound}</span>
                               <Timer currentDate={this.props.roundTimer}  />
                           </div>
                            <div className="loader col-sm-10">
                                <Roundloader gameRound={this.props.gameRound}/>
                            </div>
                        </div>
                        <div className="col-sm-3 award-wrapper">
                            <div className="ribbon-icon">
                                <i className="icon2-icn-award"></i>
                            </div>
                            <div className="round-button">${this.props.gameScore}</div>
                        </div>
                    </div>
                </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameScore: state.gameScore,
        gameRound: state.gameRound,
        roundTimer: state.roundTimer
    }
}

export default  connect(mapStateToProps)(Header)