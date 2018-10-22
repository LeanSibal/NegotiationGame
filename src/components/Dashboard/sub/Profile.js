import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';

class Profile extends Component{

    constructor(props) {
        super(props);
    }
    
    

    render() {
        let player = this.props.player;
        return(
            <Aux>
                {this.props.userId !== player.player_id &&
                    <div>{player.display_name}</div>
                }
                <figure className="figure player-profile">
                    <img src={player.photo_url} alt="..." className="img-thumbnail" />
                    {this.props.userId !== player.player_id &&
                        <figcaption className="figure-caption text-center">${player.score}</figcaption>
                    }
                </figure>
            </Aux>
        )
    }


}
const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps)(Profile)
