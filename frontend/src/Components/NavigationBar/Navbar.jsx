import styles from "./navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
const Navbar =() =>
{
    return(
        <nav className={`container ${styles.navigation}`}>
        <div>
        <h4>Goodie</h4>
        </div>
            <ul className="navlinks">
            <Link to="/" ><li>Home</li></Link>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>Signup</li>
                <li>Login</li>
               
            </ul>
            
        </nav>
    )
}

export default Navbar;