import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";


import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handleLogin = (event) => {
        console.log(this.state)
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>  Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username :</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your user name'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>PassWord:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span
                                    onClick={() => this.handleShowHidePassword()}
                                >
                                    <i class={this.state.isShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={(event) => this.handleLogin(event)}>Login</button>
                        </div>
                        <div className='col-12 mt-3'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span>Or Login With</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
