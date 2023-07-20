import data from "../../data";
import React from "react";
import styles from "./produts.module.css";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className={styles.items}>
      <h1>Products</h1>
      <div className={styles.products}>
        {data.products.map((product) => (
          <div className={styles.product} key={product.slug}>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </Link>
            <hr />
            <div className={styles.product_info}>
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
              </Link>
              <p><strong>${product.price}</strong></p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
