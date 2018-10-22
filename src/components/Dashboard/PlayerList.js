import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import PlayerSlot from './PlayerSlot';


class PlayerList  extends Component {

    constructor(props) {
        super(props);

        this.removePlayer = this.removePlayer.bind(this);
        this.renderPlayerSlot = this.renderPlayerSlot.bind(this);
    }

    removePlayer(key, playerId) {

      let playerKey = key;
      let gameId = this.props.gameId;
      this.props.removePlayer(gameId,playerKey, playerId);
    }


    renderPlayerSlot() {
        let playerSlot = Object.keys(this.props.players).length;
        const playerSlotItems = [];

        for(let x = playerSlot; x < this.props.gameType; x++) {
            let playerNum = x + 1;
            playerSlotItems.push(<PlayerSlot key={playerNum} playerNum={playerNum} />);
        }
        return playerSlotItems;
    }

    render() {
        let players = this.props.players;
        return (
            <div className="player-list col-sm-5">
                {Object.keys(players).map((key, i) => {
                   return (
                       <div className="player-item" key={key}>
                           <table className="table table-borderless">
                                <tbody>
                                   <tr>
                                       <td className="align-middle" width="10%"><span>{i + 1}</span></td>
                                       <td className="align-middle" width="20%"><span><img className="img-circle" src={players[key].photo_url}/></span></td>
                                       <td className="align-middle" width="60%"><span>
                                           {this.props.userId === players[key].player_id ? 'Me' : players[key].display_name }
                                       </span></td>
                                           <td className="align-middle" width="10%">
                                               {this.props.userId === players[key].player_id ? '' :

                                               this.props.isServer &&
                                                    <button className="remove" onClick={() => {this.removePlayer(key, players[key].player_id)}} data-key={key}><i className="fa fa-trash-o"></i></button>
                                               }
                                               </td>
                                           </tr>
                                </tbody>
                           </table>

                       </div>
                   )
                })}
                {this.renderPlayerSlot()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        gameState: state.gameState,
        players: state.players,
        userId: state.userId,
        isServer: state.firstPlayerId === state.userId,
        gameType: state.gameType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removePlayer: (playerKey, gameId, playerId) => dispatch(actions.removePlayer(playerKey, gameId, playerId))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(PlayerList);
