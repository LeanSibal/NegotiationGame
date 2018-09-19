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
        this.props.getPlayerCollection();
        let searchElem = $('.search-player');
        let root = this;
        let charLimit = 4;

        searchElem.on('keyup', function() {
            let $this = $(this);
            let terms =searchElem.val();

            if(terms.length < charLimit ){
                root.setState({
                    searchResult: null
                });
                return;
            }

            var reg = new RegExp(terms.split('').join('\\w*').replace(/\W/, ""), 'i');
            let result = root.props.playerCollection.filter(function(user) {
                if (user.name.match(reg)) {
                    return user;
                }else {
                    return null
                }
            });

            root.setState({
                searchResult: result
            });
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
                {this.state.searchResult !== null &&
                    <div className="col-sm-12">
                        <ul>
                            {Object.values(this.state.searchResult).map((value, i) => {
                                return (
                                    <li key={value.uid}>
                                        {value.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerCollection: state.playerCollection
    }
};

const mapDispatchToProps = dispatch => {
    return {
       // searchPlayer: (terms) => dispatch(actions.searchPlayer(terms)),
          getPlayerCollection: () => dispatch(actions.getPlayerCollection())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(SearchPlayer);