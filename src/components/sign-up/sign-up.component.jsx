import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    });

    const { password, confirmPassword, displayName, email } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords does not match');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setUserCredentials({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            });

        } catch (error) {
            console.error(error);
        }

    }

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required />
                <FormInput name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required />
                <FormInput name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <FormInput name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;