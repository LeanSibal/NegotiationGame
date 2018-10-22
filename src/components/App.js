import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import Login from './Login';
import Dashboard from './Dashboard';
import Layout from './Layout/Layout'

class App extends Component {

    componentWillMount(){
       this.props.checkAuth();
    }

    render() {
        return (
            <div className="app container-fluid">
                <Layout>
                    {!this.props.isAuthenticated
                        ? <Login />
                        : <Dashboard  />
                    }
                    {this.props.userToken}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        gameId: state.gameId,
        isAuthenticated: state.userToken !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);