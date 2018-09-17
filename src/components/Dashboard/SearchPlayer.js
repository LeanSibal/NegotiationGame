import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SearchPlayer  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResult: null
        }
    }

    componentDidMount() {

        let searchElem = $('.search-player');
        searchElem.on('keydown', function() {

            let $this = $(this);
            let terms = $this.val();
        });
    }

    render() {
        return (
            <div className="col-md-12 search">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Search</span>
                    </div>
                    <input type="text" className="form-control search-player" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
       // searchPlayer: (terms) => dispatch(actions.searchPlayer(terms))
    }
}

export default  connect(mapStateToProps)(SearchPlayer);