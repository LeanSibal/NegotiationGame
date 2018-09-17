import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class PlayerList  extends Component {

    constructor(props) {
        super(props);

        this.removePlayer = this.removePlayer.bind(this);
    }

      removePlayer(key) {

          let playerKey = key;
          let gameId = this.props.gameId;
          this.props.removePlayer(gameId,playerKey);
    }

    componentDidMount() {

    }

    render() {

        let players = this.props.players;
        return (
            <div className="player-list col-sm-12">

                {Object.keys(players).map((key, i) => {
                   return (
                       <div className="player-item" key={key}>
                           <table className="table table-borderless">
                                <tbody>
                                   <tr>
                                       <td className="align-middle" width="10%"><span>{i + 1}</span></td>
                                       <td className="align-middle" width="20%"><span><img className="img-circle" src={players[key].thumbnail}/></span></td>
                                       <td className="align-middle" width="60%"><span>
                                           {this.props.userId === players[key].player_id ? 'Me' : players[key].display_name }
                                       </span></td>
                                       <td className="align-middle" width="10%"><button className="remove" onClick={() => {this.removePlayer(key)}}  data-key={key}><i className="fa fa-trash-o"></i></button></td>
                                   </tr>
                                </tbody>
                           </table>
                       </div>
                   )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        gameState: state.gameState,
        players: state.players,
        userId: state.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removePlayer: (playerKey, gameId) => dispatch(actions.removePlayer(playerKey, gameId))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(PlayerList);