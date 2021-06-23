import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { connect } from "react-redux"
import { clearCart } from "../../redux/cart/cartAction"


const StripeCheckoutButton = ({ price , clearCart }) => {
    const stripePrice = price * 100 ;
    const publishableKey = "pk_test_51J1bxiSGvtf0opdzQv7P5lD8kyZDCdwjsMISbpDe2abuh9ne4bglHAoCA4iEapB4vgMNdu5IDspf7UZWVmQijXVv008lXVF8PM"



    const onToken = (token) =>{  
        clearCart()
        axios({
            url : 'payment' ,
            method : 'post' ,
            data : {
                amount : stripePrice ,
                token : token
            }
        }).then((response) => {
            alert("Payment Succesful")
        }).catch((error) => {
            console.log("Payment Error: " , error)
            alert("There was an issue with your payment . Please make sure you use the provided credit card")
        })
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name = "CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is ₹${price}`}
            amount={stripePrice}
            currency="INR"
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearCart : () => dispatch(clearCart())
})

export default connect(undefined , mapDispatchToProps)(StripeCheckoutButton)