import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gameaction from './Gameaction';
import ButtonIcon from './Footer/ButtonIcon';
import ContentModal from './Footer/ContentModal';
import HowToPlay from './Footer/Content/HowToPlay';
import MoveHistory from './Footer/Content/MoveHistory';
import ScoreBoard from './Footer/Content/ScoreBoard';
import Settings from './Footer/Content/Settings';
import Chat from './Footer/Chat';

class Footer extends  Component {

    constructor(props) {
        super(props);
        this.showModalHandle = this.showModalHandle.bind(this);
        this.state = {
            modalContent: null,
            modalTitle: null
        }
    }

    showModalHandle(title,content){
        $('#contentModal').modal();
        this.setState({
            modalContent:content,
            modalTitle: title
        })
    }

    render() {
        return (
            <footer>
                <ContentModal title={this.state.modalTitle} content={this.state.modalContent} />
                <div className="row game-footer">
                    <div className="col-sm-4 text-center">
                        <ul className="setting-wrapper">
                            <li onClick={() => this.showModalHandle('How To Play',<HowToPlay/>)}>
                                <ButtonIcon   class="setting-box" label="How to play" icon="icon2-tips" />
                            </li>
                            <li onClick={() => this.showModalHandle('Move History',<MoveHistory/>)}>
                                <ButtonIcon class="setting-box" label="Move history" icon="icon2-history" />
                            </li>
                            <li onClick={() => this.showModalHandle('Leaderboard',<ScoreBoard/>)}>
                                <ButtonIcon class="setting-box" label="score board" icon="icon2-score" />
                            </li>
                            <li onClick={() => this.showModalHandle('Settings',<Settings/>)}>
                                <ButtonIcon class="setting-box" label="settings" icon="icon2-settings" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <Gameaction />
                    </div>
                    <div className="col-sm-4 text-center">
                        <Chat />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer