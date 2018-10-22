import React, { Component } from 'react';
import Aux from './../../../../hoc/Aux';

class ButtonIcon extends  Component {

    constructor(props) {
        super(props);
    }

    render() {

        let icon = ['fa',this.props.icon];
        return (
            <Aux>
                <div className={this.props.class}>
                    <i className={icon.join(' ')}></i>
                </div>
                <span>{this.props.label}</span>
            </Aux>
        )
    }
}

export default ButtonIcon