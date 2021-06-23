import React from "react"

import LoadingPage from "../../pages/loading/loading.component"

const WithSpinner = (WrappedComponent ) => {
    const withSpinner = ({ isLoading , ...otherProps }) => {
        return  isLoading  ? ( 
            <LoadingPage /> 
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return withSpinner
}


export default WithSpinner 