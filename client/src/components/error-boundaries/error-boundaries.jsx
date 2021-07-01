import React from "react"
import "./error-boundaries.scss"

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){

        return { hasErrored : true}
    }

    render() {
        if(this.state.hasErrored){ 
            return (
                <div className="error-container">
                    <div className="error-image" />
                    <h2 className="error-message">Oops some error has occured</h2>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary