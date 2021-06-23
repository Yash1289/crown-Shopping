import React from "react"
import './App.css';
import { BrowserRouter , Switch , Route , Redirect } from "react-router-dom"


import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout/checkout.component"


import Header from "./components/header/header.component"
import { connect } from "react-redux"
import { selectCurrentUser } from "./redux/user/user.selector"
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selector"
import { checkUserSession } from "./redux/user/userAction"


 class AppRouter extends React.Component {
    async componentDidMount() {
    /* setCollectionsAndDocuments('collections' , this.props.collectionsArray.map(({ title ,items }) => ({ title , items })))
    const { checkUserSession } = this.props
    checkUserSession()   */
  } 

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => this.props.user ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  user : selectCurrentUser(state) ,
  collectionsArray : selectShopCollectionsForPreview(state)
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps , mapDispatchToProps)(AppRouter);
