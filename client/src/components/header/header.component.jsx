import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crwn.svg"
import "./header.styles.scss"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartHidden} from "../../redux/cart/cart.selectors"
import { signOutStart } from "../../redux/user/userAction"

const Header = ({ user , toggleCart , signOutStart }) => (
    <div className="header">
       <Link className="logo-container" to="/">
            <Logo className="logo" />
       </Link>
       <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                !!user ? 
                    <div className="option" onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon />
       </div>{
            toggleCart ?  null :< CartDropdown />
       }
       
    </div>
)



const mapStateToProps = (state) => ({
    user : selectCurrentUser(state) ,
    toggleCart: selectCartHidden(state)
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps , mapDispatchToProps)(Header)