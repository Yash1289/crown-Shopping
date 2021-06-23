import React, { useState } from "react"
import { connect } from "react-redux"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"  
 

import { emailSignInStart , googleSignInStart } from "../../redux/user/userAction"

const SignIn = ({ emailSignInStart , googleSignInStart}) => {  

    const [ userCredentials , setCredentials ] = useState({ email : "" , password : ""})

    const { email , password } = userCredentials 

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailSignInStart(email , password )
    }

    const handleChange = (e) => {
        const { value , name} = e.target;

        setCredentials({ ...userCredentials, [name]: value })
    }
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name="email" 
                        label="email"
                        type="email" 
                        handleChange={handleChange } 
                        value={email}
                        required
                     / >
                    <FormInput 
                        name="password" 
                        label="password"
                        type="password"
                        handleChange={handleChange} 
                        value={password}
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                                Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) => ({
    emailSignInStart : (email, password) => dispatch(emailSignInStart({ email , password })) ,
    googleSignInStart : () => dispatch(googleSignInStart())
}) 
 
export default connect(undefined , mapDispatchToProps)(SignIn) 