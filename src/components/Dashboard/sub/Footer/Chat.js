import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';


class Chat extends  Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.chatMessage !== nextProps.chatMessage){
            this.chatMessageAnimate()
        }
    }

    chatMessageAnimate(){
        let messageBox = $('.messageBox');
        messageBox.animate({scrollTop: messageBox[0].scrollHeight}, 500)
    }

    componentDidMount(){

        let formElem = $('#formMessage');
        let textMessage = $('#txtMessage');
        let $this = this;
        formElem.on('submit',function(e){
            e.preventDefault();
            let messageData = {
                'message' : textMessage.val(),
                'name'    : $this.props.displayName,
                'uid'     : $this.props.userId
            }

            $this.props.handleSendingMessage($this.props.gameId, messageData);
            textMessage.val('');
        })

        this.chatMessageAnimate();
    }


    render() {
        return (
            <Aux>
                <h5 className="chat-title">Chat</h5>
                <div className="container chat-box">
                    <div className="messageBox text-left">
                        {typeof this.props.chatMessage !== 'undefined' &&
                        Object.values(this.props.chatMessage).map((list,i) => {
                            return (
                                <div className="entry" key={i}>{list.name} : {list.message}</div>
                            )
                        })}
                    </div>
                    <div className="chatBox">
                        <form className="form-inline" id="formMessage" >
                            <div className="form-group mx-sm-0 mb-2">
                                <input type="text"  autoComplete="off" className="form-control" id="txtMessage"  placeholder="Your chat message here..." />
                            </div>
                            <button type="submit"className="btn btn-primary mx-sm-2 mb-2"><i className="icon2-message-chat-bubble-2"></i></button>
                        </form>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId : state.gameId,
        userId: state.userId,
        displayName: state.displayName,
        chatMessage: state.chatMessage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSendingMessage: (gameId,message) => dispatch(actions.sendChatMessage(gameId,message))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);