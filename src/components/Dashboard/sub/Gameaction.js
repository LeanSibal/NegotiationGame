import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

class Gameaction extends Component {

    constructor(props){
        super(props)
        this.state = {
            isActionSelected: false,
            actionSelected: null
        }

        this.sendGameAction = this.sendGameAction.bind(this);
    }

    sendGameAction() {
        let action = this.state.actionSelected;
        let gameId = this.props.gameId;
        let userId = this.props.userId;
        let round  = this.props.round;
        this.props.submitGameAction(gameId,userId,round,action);
    }

    componentDidMount() {
        
        if(typeof this.props.actionSelected !== 'undefined'){
            this.setState({
                isActionSelected: true,
                actionSelected: this.props.actionSelected.action
            })
        }
        
        
        let actionWrapper = $('.game-action');
        let actionSelector = actionWrapper.find('input:radio[name=action]');
        let $root = this;
        actionSelector.on('click', function() {
            let $this = $(this);
            if($this.prop('checked') && $root.state.isActionSelected === false){
                actionWrapper.find('label').removeClass('selected').addClass('blur');
                $this.closest('label').removeClass('blur').addClass('selected');
                $root.setState({
                    isActionSelected: true,
                    actionSelected: $this.val()
                })

                $root.sendGameAction();
            }
        });
    }

    render() {
        let doneButtonClass = ['action-identifier', this.state.isActionSelected ? 'blur' : ''];
        let actionButtonTClass = ['action-label ga-t', this.state.actionSelected == 'T' && 'selected'];
        let actionButtonGClass = ['action-label ga-g', this.state.actionSelected == 'G' && 'selected'];

        actionButtonTClass.push(this.state.isActionSelected && 'blur');
        actionButtonGClass.push(this.state.isActionSelected && 'blur');

        return (
            <Aux>
                <div className="row game-action">
                    <div className="col-sm-6">
                        <label className={actionButtonTClass.join(' ')}>
                            <input type="radio" value="T" className="hide" name="action"/>
                            <span className="align-middle">T</span>
                        </label>
                    </div>
                    <div className="col-sm-6">
                        <label className={actionButtonGClass.join(' ')}>
                            <input type="radio" value="G" className="hide" name="action"/>
                            <span>G</span>
                        </label>
                    </div>
                    <div className="col-sm-12">
                        <span className={doneButtonClass.join(' ')}>DONE</span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        userId: state.userId,
        round: state.gameRound,
        gameActions: state.gameActions,
        actionSelected: state.gameActions[state.gameRound][state.userId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitGameAction: (gameId, userId, round, action) => dispatch(actions.submitGameAction(gameId, userId, round, action))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gameaction)