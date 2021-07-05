import React,{Profiler} from "react"
import "./checkout.styles.scss"

import { connect } from "react-redux"
import { selectCartItems , selectCartTotal } from "../../redux/cart/cart.selectors"
import  CheckoutItem  from "../../components/checkout-item/checkout-item.component"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
 
const CheckoutPage = ({ cartItems , cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div> 
        {
            cartItems.map((cartItem) => <Profiler key={cartItem.id} id="CekOutItem" onRender={(id , phase, actualDuration) => console.log({
                        id ,
                        phase, 
                        actualDuration
                    })}>  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                 </Profiler>  )
        }
        <div className='total'>TOTAL: ₹{cartTotal}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4000 0566 5566 5556 - Exp: 10/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotal}/>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state),
    cartTotal : selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage) 