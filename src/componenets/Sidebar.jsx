import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { HomeFilled  } from "@ant-design/icons"
import { ScheduleOutlined } from "@ant-design/icons"
import { UserSwitchOutlined, AppstoreFilled } from "@ant-design/icons"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"HOME",
            icon:<HomeFilled />
        },
        {
            path:"/about",
            name:"MODULES",
            icon:<ScheduleOutlined />
        },
        {
            path:"/analytics",
            name:"INSTRUCTORS",
            icon:<UserSwitchOutlined />
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">C_devops</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                       <AppstoreFilled onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
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