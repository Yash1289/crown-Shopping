import React, { lazy , Suspense} from "react"
import './App.scss';
import { BrowserRouter , Switch , Route , Redirect } from "react-router-dom"


import LoadingPage from "./pages/loading/loading.component";
import ErrorBoundary from "./components/error-boundaries/error-boundaries";

import Header from "./components/header/header.component"
import { connect } from "react-redux"
import { selectCurrentUser } from "./redux/user/user.selector"
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selector"
import { checkUserSession } from "./redux/user/userAction"


const Homepage = lazy(() => import("./pages/homepage/homepage.component"))
const ShopPage = lazy(() => import("./pages/shop/shop.component"))
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"))
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))
const NotFoundPage = lazy(() => import("./pages/notFound/notFound.jsx"))
const ContactUsPage = lazy(() => import("./pages/contactusPage/contactusPage.component"))

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
           <ErrorBoundary >
             <Suspense fallback={<LoadingPage />}>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/contactus" component={ContactUsPage} />
                <Route exact path="/signin" render={() => this.props.user ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
                <Route exact path="*" component={NotFoundPage} />
              </Switch>
            </Suspense>
          </ErrorBoundary> 
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
