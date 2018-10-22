import React, { Component } from 'react';

class ContentModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="modal fade" id="contentModal"  role="dialog" aria-labelledby="contentModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContentModal