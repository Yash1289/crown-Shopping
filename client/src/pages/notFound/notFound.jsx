import React from 'react';
import { Link } from 'react-router-dom';
import "./notFound.styles.scss"

class NotFoundPage extends React.Component{
    render(){
        return <div className="wrapper">
                    <p className="wrapper_text">
                        <Link to="/"> Lost in the Wind <br></br>Go to Home </Link>
                    </p>
               </div>;
    }
}

export default NotFoundPage;