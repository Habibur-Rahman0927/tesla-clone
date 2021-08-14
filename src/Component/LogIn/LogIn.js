import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LogIn.css'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from '../../firabase.config';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName
                }))
                history.push('/teslaaccount');
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div className="login">
            <div className="login_header">
                <div className="login_logo">
                    <Link>
                        <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                    </Link>
                </div>
                <div className="login_language">
                    <LanguageOutlinedIcon /><span>en-Us</span>
                </div>
            </div>
            <div className="login_info">
                <h1>Sing In</h1>
                <form className="login_form" action="">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ButtonPrimary name="Sign In" type="submit" onClick={signIn}></ButtonPrimary>
                </form>

                <div className="login_divider">
                    <hr /> <span>or</span><hr />
                </div>
                <Link to="/signup">
                    <ButtonSecondary name='create account' />
                </Link>
            </div>
        </div>
    );
};

export default LogIn;