import { connect } from "react-redux"
import { compose } from "redux"

import WithSpinner from "../with-spinner/with-spinner.component"
import { isCollectionsFetching } from "../../redux/shop/shop.selector"
import CollectionOverview from "./collection-overview.component"

const mapStateToProps = (state) => ({
    isLoading : isCollectionsFetching(state)
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps) ,
    WithSpinner
)(CollectionOverview)


export default CollectionOverviewContainer