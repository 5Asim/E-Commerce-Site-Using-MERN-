import React from "react";
import Products from "../Components/Products/products";
import { Helmet } from "react-helmet-async";

const HomeScreen =() =>
{
    
    return(
       <div>
       <Helmet>
        <title>Goodie</title>
       </Helmet>
        <Products/>
       </div> 
    )
}
export default HomeScreen;