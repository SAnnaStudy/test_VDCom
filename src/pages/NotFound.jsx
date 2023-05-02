import React from "react";
import './../styles/notFound.scss'

export const NotFound = (props) => {
    return(
        <div className="notf_container">
            <div className="notf_content">
                <div className="notf_picture"></div>
                <p className="notf_title">No result</p>
                <p className="notf_text">Please, try to rewrite it</p>
            </div>
        </div>
    )
}