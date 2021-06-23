import React , { useEffect } from "react"
import "./shop.styles.scss"
import { Route } from "react-router-dom"

import { connect } from "react-redux"
import setShopDataStart from "../../redux/shop/shopAction"
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container"
import CollectionPageContainer from "../collection/collection.container"



const ShopPage = ({ match , setShopData }) => {
 
    useEffect(() => {
        setShopData()
    }, [setShopData])

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }



const mapDispatchToProps = (dispatch) => ({
    setShopData : () => dispatch(setShopDataStart())
})

export default connect(undefined , mapDispatchToProps)(ShopPage)