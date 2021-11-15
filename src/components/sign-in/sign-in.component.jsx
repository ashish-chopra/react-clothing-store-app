import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required />
                <label htmlFor="email"></label>
                <FormInput type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <label htmlFor="password"></label>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );

}

export default SignIn;