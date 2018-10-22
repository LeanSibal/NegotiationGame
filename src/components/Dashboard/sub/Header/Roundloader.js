import React, { Component } from 'react';

class Roundloader extends Component{

    constructor(props){
        super(props);
    }

    
    render() {

        let loaderPercentage = (this.props.gameRound / 12) * 100;
        let cssStyle = {
            width: loaderPercentage + '%'
        }
       
        return(
            <div className="loader-inner" style={cssStyle}></div>
        )
    }
}

export default (Roundloader)