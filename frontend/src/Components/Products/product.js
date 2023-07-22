import { Button, Card } from "react-bootstrap";
import styles from "./produts.module.css";
import { Link } from "react-router-dom";
import Rating from "../Rating";
const Product =(props) =>
{
    const { product } = props;

    return(
        
            <Card className={styles.product} key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
            <Link to={`/product/${product.slug}`}>
                <Card.Title><p>{product.name}</p></Card.Title>
              </Link>
              <Rating rating = {product.rating} numReviews={product.numReviews} />
              <Card.Text> <p>
                <strong>${product.price}</strong>
              </p></Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
            
             
              
            
          </Card>
        
    )
}
export default Product;