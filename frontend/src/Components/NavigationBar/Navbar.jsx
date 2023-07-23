import styles from "./navbar.module.css";
import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../store";

const Navbar =() =>
{
    const {state} = useContext(Store);
    const {cart} = state;

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
                <Link to="/cart">
                <li>Cart
                {cart.cartItems.length > 0 &&(
                    <Badge pill bg="danger">
                        {cart.cartItems.length}
                    </Badge>
                )}</li>
                </Link>
                <Link to="/signin" ><li>Signin</li></Link>
                <Link to="/signup" ><li>SignUp</li></Link>
                
                
               
            </ul>
            
        </nav>
    )
}

export default Navbar;