import { useState, createContext, useContext } from "react";
import { Store } from "../store";
import { Helmet } from "react-helmet-async";
import MessageBox from "../Components/messagebox";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartScreen()
{
    const {state,dispatch: ctxDispach} = useContext(Store)
    const {
        cart:{cartItems},

    }= state;
    return(
        <div>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <h1>Shopping Cart</h1>
            <Row>
                <Col md={8}>
                {cartItems.length === 0 ?CartScreen(<MessageBox>Cart is Empty</MessageBox>
                ):(
                    <ListGroup>
                        {cartItems.map((item)=> (
                            <ListGroup.Item key={item._id}>
                                <Row className="align-items-center">
                                    <Col md ={4}>
                                        <img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail">
                                        </img>{' '}
                                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant="light" disabled={item.quantity === 1}>
                                            <i className="fas fa-minus-circle"></i>
                                        </Button>{' '}
                                        <span>{item.quantity}</span>
                                        <Button variant="light" disabled={item.quantity === 1}>
                                            <i className="fas fa-plus-circle"></i>
                                        </Button>{' '}
                                    </Col>
                                    <Col md={3}>${item.price}</Col>
                                    <Col md={2}>
                                        <Button varaint="light">
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                        }
                    </ListGroup>
                )
                }

                </Col>
            </Row>
        </div>
    )
}