import React from "react"
import "./collection-overview.styles.scss"
import { connect } from "react-redux"
import selectShopCollectionsForPreview from "../../redux/shop/shop.selector"
import CollectionPreview from "../collection-preview/collection-preview.component"


const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map((product) => <CollectionPreview key={product.id} {...product} />)}
    </div>
)

const mapStateToProps = (state) => ({ 
    collections: selectShopCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview)