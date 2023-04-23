import React from 'react'
import "./Navbar.css"
import logo_g from "../../assets/img/logo1.png"

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="links">
                <div className="shop-logo_c"> EDYODA </div>
            </div>
            <div className="Test_logo"> Hii Test Learner! </div>
            <div className="logo">
                <img src={logo_g} alt="/" />
            </div>
        </div>
    )
};