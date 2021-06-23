import React from "react"

import "./loading.styles.scss"

import logo from "../../assets/loading.gif"

const LoadingPage = () => (
    <div className="loader">
        <img alt="loading-icon" className="loader__image" src={logo} />
    </div>
)

export default LoadingPage 