import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
   
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="http://faizulmawaidilburhaniyah.com/fmb/templates/fmb/images/logo.png"
                    alt=""
                />
            </Link>
            <div className="header__center">
                NAGPUR 
            </div>
        </div>
    )
}

export default Header
