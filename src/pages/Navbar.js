import React from "react";
import { NavLink } from "react-router-dom";


function Navbar () {

    return(
    <>
    <div className="navbar">
        <ul>
            <li>
                {/* <NavLink to="home"> */}
                <NavLink to="/">Landing</NavLink>
            </li>
            <li>
                <NavLink to="/books">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
                
         
            
        </ul>

    </div>
    </>)

}
export default Navbar;