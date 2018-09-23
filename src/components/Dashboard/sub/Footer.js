import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

class Footer extends  Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Aux>
                <div className="row">
                    <div className="col-sm-12">Footer</div>
                </div>
            </Aux>
        )
    }
}

export default Footer