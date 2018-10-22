import React, { Component } from 'react';

class PlayerSlot  extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player-item" key={this.props.playerNum}>
                <table className="table table-borderless">
                    <tbody>
                    <tr className="add-player">
                        <td className="align-middle" width="10%"><span>{this.props.playerNum}</span></td>
                        <td className="align-middle" width="20%"><span></span></td>
                        <td className="align-middle" width="60%"><span>Add player {this.props.playerNum}</span></td>
                        <td className="align-middle" width="10%"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default  PlayerSlot
