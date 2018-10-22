import React, { Component } from 'react';


class Playermove extends Component{

    constructor(props){
        super(props);

        this.actionFullName = this.actionFullName.bind(this);
    }

    actionFullName(code) {

        switch(code){
            case 'T':
                return 'Take';
            case 'G':
                return 'Give';
        }
    }

    render() {

        return (
          <div className="player-move">
            <span className="name">{this.props.playerName}</span>
              {typeof this.props.playerAction !== "undefined" ?
                  <div className={"has-choosen action-" + this.props.playerAction.action}>
                      <span className="image">{this.props.playerAction.action}</span>
                      <span className="text">{this.actionFullName(this.props.playerAction.action)}</span>
                  </div> :
                  <div className="no-action">
                      <span className="image"></span>
                      <span className="text">Not choose yet</span>
                  </div>
              }
          </div>
        );
    }
}

export default Playermove;