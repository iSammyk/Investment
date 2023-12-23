import React, { useState } from 'react';
import './sidebar.css'
import {
    FaTh,
    FaBars,
    FaChalkboardTeacher,
    FaEnvelopeOpenText,
    FaMoneyCheckAlt 
}from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/analytics",
            name:"Investments",
            icon:<FaMoneyCheckAlt />
        },
        {
            path:"/comment",
            name:"How it works",
            icon:<FaChalkboardTeacher/>
        },
        {
            path:"/product",
            name:"Withdraw",
            icon:<FaEnvelopeOpenText/>
        },
        {
            path:"/productList",
            name:"Transaction history",
            icon:<BiMoneyWithdraw />
        }
    ]
    return (
        <div className="stem">
           <div style={{width: isOpen ? "max-content" : "max-content"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                      { isOpen ?  <IoCloseSharp onClick={toggle}/> :  <FaBars onClick={toggle}/>}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link my-2" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;