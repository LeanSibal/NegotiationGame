import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Joinplayer from './joinPlayer';
import Resultplayertag  from './ResultPlayerTag';
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
            let terms = searchElem.val();

            if(terms.length < charLimit ){
                root.setState({
                    searchResult: null
                });
                return;
            }

            var reg = new RegExp(terms.split('').join('\\w*').replace(/\W/, ""), 'i');
            let result = root.props.playerCollection.filter(function(user) {
                if (user.name.match(reg) && user.uid !== root.props.userId) {
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

            <div className="row">
                <div className="col-sm-6 nopadding center-align">
                    <div className="input-group">
                        <div className="input-group-prepend search-icon-wrapper">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                        </div>
                        <input type="text" className="form-control search-player" placeholder="Search for player" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-sm-12 nopadding">
                    {this.state.searchResult !== null &&
                    <div className="col-sm-6 search-result">
                        <ul className="list-group ">
                            {Object.values(this.state.searchResult).map((value, i) => {
                                return (
                                    <li key={value.uid} className="list-group-item">
                                      <div className="row">
                                          <div className="col-sm-1"><img className="img" src={value.thumbnail} /></div>
                                          <div className="col-sm-7">
                                              <div className="row">
                                                  <div className="col-sm-12">{value.name}</div>
                                                  <Resultplayertag playerId={value.uid} />
                                              </div>
                                          </div>
                                          <div className="col-sm-4">
                                              <Joinplayer playerId={value.uid} playerPhoto={value.thumbnail} playerName={value.name} playerEmail={value.email}  />
                                          </div>
                                      </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerCollection: state.playerCollection,
        userId: state.userId,
        players: state.players
    }
};

const mapDispatchToProps = dispatch => {
    return {
       // searchPlayer: (terms) => dispatch(actions.searchPlayer(terms)),
          getPlayerCollection: () => dispatch(actions.getPlayerCollection())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(SearchPlayer);