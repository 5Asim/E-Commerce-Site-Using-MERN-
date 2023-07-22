// import data from "../../data";
import React, { useEffect, useReducer } from "react";
import { Row,Col } from "react-bootstrap";
import styles from "./produts.module.css";

import axios from "axios";
import logger from "use-reducer-logger";
import Product from "./product";
import LoadingBox from "../loadingbox";
import MessageBox from "../messagebox";
import { getError } from "../../utils";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const Products = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products,setProducts]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.items}>
      <h1>Products</h1>

      {loading ? (
        <div><LoadingBox /></div>
      ) : error ? (
        <MessageBox varaint="danger">{error}</MessageBox>
      ) : (
        <Row>
          <div className={styles.products} >
            {products.map((product) => (
              
              <Product product={product}/>
              
              
             

            ))}
          </div>
        </Row>
      )}
    </div>
  );
};
export default Products;
