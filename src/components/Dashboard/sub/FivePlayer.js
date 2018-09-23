import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

class Fiveplayer extends  Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Aux>
                <div className="row">
                    <div className="col-sm-12">Body</div>
                </div>
            </Aux>
        )
    }
}

export default Fiveplayer