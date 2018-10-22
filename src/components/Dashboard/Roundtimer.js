import React, { Component } from 'react';
import { connect } from 'react-redux';

class Roundtimer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //$('#roundTimer').modal();
    }

    render() {
        return(
            <div className="modal fade" id="roundTimer"  role="dialog" aria-labelledby="roundTimer" data-backdrop="static" data-keyboard="false" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="headerTitle">Round {this.props.gameRound}</div>
                        <span className="modal-text">The round will start in</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameRound: state.gameRound
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Roundtimer)