import { connect } from "react-redux"
import { compose } from "redux"

import { isCollectionsLoaded } from "../../redux/shop/shop.selector"
import CollectionPage from "./collection.component"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

const mapStateToProps = (state) => ({
    isLoading : !isCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect( mapStateToProps ) ,
    WithSpinner
)(CollectionPage) 

export default CollectionPageContainer

