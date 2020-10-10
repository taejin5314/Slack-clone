import React from 'react';
import './Login.css';
import logo from '../../images/slack-new-logo.svg';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';


function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                alert(err.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="" />
                <h1>Sign in to Taejin Jung's Slack clone</h1>
                <p>taejin5314.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
