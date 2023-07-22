import { Axios } from "axios";
import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../store";

export default function SigninScreen()
{
    const { search } =useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl? redirectInUrl:'/'

    const [email,SetEmail] = useState('');
    const [password,setPassword] = useState('');

    const { state, dispatch:ctxDispatch } = useContext(Store);

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const { data } = await Axios.post('/api/users/signin',{
                email,
                password
            });
        } catch(err)
        {

        }
    }
    return(
        <Container className="small-container">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className="my-3">Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required onChange={(e)=> SetEmail(e.target.value)}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Sign In</Button>
                </div>
                <div className="mb-3">
                New customer?{' '}
                <Link to={`/signup?redirect=${redirect}`}>Create your Account</Link>

                </div>

            </Form>
        </Container>
    )
    
}