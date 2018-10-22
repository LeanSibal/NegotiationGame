import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';

class Resultplayertag  extends Component {

    constructor(props) {
        super(props);

        this.sumHandle = this.sumHandle.bind(this);
    }

    sumHandle(num1, num2) {
        return num1 + num2;
    }

    render() {
        let root = this;
        return (
        <Aux>
            {Object.values(this.props.players).map((player, index) => {
                if(player.player_id === root.props.playerId)
                {
                    return (
                        <div key={index} className="col-sm-12 p-tag">Player {root.sumHandle(index,1)}</div>
                    )
                }
            })}
        </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
};

export default  connect(mapStateToProps)(Resultplayertag);