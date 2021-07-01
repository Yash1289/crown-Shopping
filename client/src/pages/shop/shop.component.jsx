import React , { useEffect , lazy , Suspense } from "react"
import "./shop.styles.scss"
import { Route } from "react-router-dom"

import { connect } from "react-redux"
import setShopDataStart from "../../redux/shop/shopAction"
import LoadingPage from "../loading/loading.component"

const CollectionOverviewContainer = lazy(() => import("../../components/collection-overview/collection-overview.container"))
const CollectionPageContainer = lazy(() => import("../collection/collection.container"))


const ShopPage = ({ match , setShopData }) => {
 
    useEffect(() => {
        setShopData()
    }, [setShopData])

        return (
            <div className="shop-page">
                <Suspense fallback={<LoadingPage />}>
                    <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                    <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                </Suspense>   
            </div>
        )
    }



const mapDispatchToProps = (dispatch) => ({
    setShopData : () => dispatch(setShopDataStart())
})

export default connect(undefined , mapDispatchToProps)(ShopPage)