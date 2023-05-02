import React from "react";
import {Link} from 'react-router-dom'
import './../styles/errorPage.scss'

export const ErrorURLPage = () => {
    return(
        <div className="ep_container">
            <div className="ep_content1">
                <div className="ep_picture"></div>
                <p className="ep_title">Какой-то сверхразум все сломал</p>
                <p className="ep_text">Постараемся быстро починить</p>
                <Link className="ep_link" to={'/'}>Попробовать снова</Link>
            </div>
        </div>
    ) 
}