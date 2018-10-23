import React, { Component } from 'react';
import * as actions from '../../../../store/actions/index';
import { connect } from 'react-redux';

class Timer extends Component{

    constructor(props){
        super(props);
        this.state = {
            countdown: '02:00'
        }


        this.startTimer = this.startTimer.bind(this);
        this.nextRoundHandle = this.nextRoundHandle.bind(this);
    }

    startTimer() {

        let countDownDate = new Date(this.props.currentDate).getTime() + (2 * 60000) + 30000;
        let $root = this;
        let x = setInterval(function() {

            let now = new Date().getTime();
            let interval = countDownDate - now;
            let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((interval % (1000 * 60)) / 1000);

            if(minutes == 2 && seconds > 0){
                $('#roundTimer').modal();
                $('#roundTimer').find('h3').html('00:' + seconds);
            }else{

                if (interval > 1) {
                    $root.setState({
                        countdown: minutes + ":" + seconds
                    });
                }

                $('#roundTimer').modal('hide');
            }


            if (interval < 1) {
                clearInterval(x);
                $root.nextRoundHandle();
            }
        }, 1000);
    }

    nextRoundHandle(){
        if(this.props.isServer){
            let newRound = this.props.gameRound + 1;
            this.props.nextRound(this.props.gameId,newRound);
        }
    }

    componentDidMount(){
        this.startTimer();
    }

    render() {
        return(
                <span id="timer">{this.state.countdown}</span>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
        gameId: state.gameId,
        gameRound: state.gameRound,
        isServer:state.userId === state.firstPlayerId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextRound:(gameId,nextRound) => dispatch(actions.moveNextRound(gameId,nextRound))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer)