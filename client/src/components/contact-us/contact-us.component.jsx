import React, { useState , useEffect } from "react"
import "./contact-us.styles.scss"
import FlashMessage from "react-flash-message"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"  

const ContactUs = () => {

    const initialState = {
        displayName : "" ,
        email : "" ,
        subject : "" ,
        feedback : ""
    }
    const [feedbackDetails , setFeedbackDetails ] = useState(initialState)

    const [submitFlag , setFlag] = useState(false)

    const { displayName , email, subject , feedback } = feedbackDetails

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFlag(true)
        setFeedbackDetails(initialState)
    }
    useEffect(() => {
        setTimeout(() => {
            setFlag(false);
          }, 5000);
      }, [submitFlag]);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFeedbackDetails({ ...feedbackDetails, [name]: value  })
    }
        return (
            <div className="contact-us">
                <h2 className="title">Contact Us</h2>
                <span>If you have any questions, please feel free to contact us, 
                    our customer service center is working for you 24/7
                    </span>
                {
                    submitFlag? <FlashMessage  duration = {7000}>
                        <span className="flash">Feedback Submitted</span>
                    </FlashMessage>:null
                }
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
                        name="subject"
                        type="text"
                        label="subject"
                        value={subject}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        name="feedback"
                        type="text"
                        label="feedback"
                        value={feedback}
                        handleChange={handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Send Message
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }


    export default ContactUs