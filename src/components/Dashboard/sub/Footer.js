import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';
import Gameaction from './Gameaction';

class Footer extends  Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <footer>
                <div className="row game-footer">
                    <div className="col-sm-4 text-center">Settings</div>
                    <div className="col-sm-4 text-center">
                        <Gameaction />
                    </div>
                    <div className="col-sm-4 text-center">Chat</div>
                </div>
            </footer>
        )
    }
}

export default Footer