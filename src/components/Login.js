import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';


class login extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            isAuthenticated: props.isAuthenticated
        }

        this.submitLoginForm = this.submitLoginForm.bind(this);
    }


    submitLoginForm(event) {
        event.preventDefault();

        let formData = new FormData(event.target);
        let username = formData.get('username');
        let password = formData.get('password');

        this.props.onLoginSubmit(username, password);
    }

    render() {
        return (

            <Aux>
                <div className="login-form column">
                    <form action="#" method="post" className="form-group" onSubmit={this.submitLoginForm}>
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Login</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type="text" name="username" id="username" defaultValue="ramilgonzales1990@gmail.com" placeholder="Username" className="input-text form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type="password" name="password" id="password" defaultValue="gonzales" placeholder="Password" className="input-text form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type="submit"   id="submitLogin" className="btn btn-secondary form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <span className="error">{this.props.errorMessage}</span>
                            </div>
                        </div>
                    </form>
                </div>
            </Aux>
        )
    }
}


const mapStateToProps = state => {

    return {
        userToken: state.userToken,
        errorMessage:state.errorMessage
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLoginSubmit: (email, password) => dispatch(actions.auth(email, password))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);