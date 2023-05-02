import React from "react";
import {Link} from 'react-router-dom'
import './../styles/errorPage.scss'

export const ErrorPage = () => {
    return(
        <div className="ep_container">
            <div className="ep_content">
                <div className="ep_picture"></div>
                <p className="ep_title">Какой-то сверхразум все сломал</p>
                <p className="ep_text">Постараемся быстро починить</p>
                <Link className="ep_link" onClick={()=>document.location.reload()}>Попробовать снова</Link>
            </div>
        </div>
    ) 
}