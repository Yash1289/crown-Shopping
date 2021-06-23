import React , { useState} from "react"
import { connect } from "react-redux"
import "./sign-up.styles.scss"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signUpStart } from "../../redux/user/userAction"

const SignUp = ({ signUpStart }) => {

    const [userCredentials , setCredentials ] = useState({
        displayName : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : ""
    })

    const { displayName , email, password , confirmPassword } = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault();


        if(confirmPassword !== password){
            alert("The password don't match")
            return ;
        }
        signUpStart( displayName , email, password )
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setCredentials({ ...userCredentials, [name]: value  })
    }
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name="displayName"
                        type="text"
                        label="Display Name"
                        value={displayName}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        handleChange={handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign Up
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) => ({
    signUpStart: ( displayName, email, password ) => dispatch(signUpStart({displayName , email , password }))
})

export default connect(undefined , mapDispatchToProps)(SignUp)