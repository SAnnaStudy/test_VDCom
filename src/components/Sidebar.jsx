import { Button } from "bootstrap";
import React from "react"
import Vector1 from "./Vector1"
import Vector2 from "./Vector2"
import Vector3 from "./Vector3"
import { NavLink } from 'react-router-dom';
import './../styles/sidebar.scss'

const Sidebar = () => {
    const[isOpen ,setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen (!isOpen)
    }
    const munuItems =[
        {
            path: '/main',
            name: 'Total Contracts',
            icon: <Vector1/>
        },
        {
            path: '/calendar',
            name: 'Calendar',
            icon: <Vector2/>
        },
        {
            path: '/project',
            name: 'Project Report',
            icon: <Vector3/>
        }
    ]

    return(
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <p onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" className="icon">
                             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                       </p>
                   </div>
               </div>
               {
                   munuItems.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <NavLink className="logOut link" to={"/"}>Log Out</NavLink>
           </div>           
        </div>
    )
}
export default Sidebar;