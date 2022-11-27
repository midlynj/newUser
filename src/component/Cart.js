import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import {BsCartCheck, BsCartX} from 'react-icons/bs';
import axios from "axios";
import GuestCheckout from "./GuestCheckout";
import {useNavigate} from "react-router-dom";
import StripeContainer from "../stripe/StripeContainer";
import {motion} from "framer-motion";


const Cart = () => {

    const navigate = useNavigate();

    const confirmation = () => {
        navigate("/thankyouforyourpurchase")
    }


    const userId = localStorage.getItem("id")
    const timeOfPurchase = Date()

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems
    } = useCart();
    const url = `http://localhost:8000/users/${userId}`

    const checkout  = {
        items,
        totalItems,
        cartTotal,
        timeOfPurchase
    }

    console.log(items)

    function userBoughtItems () {

        const getUsername = localStorage.getItem("authenticated")
        const checkForValidCredentials = axios.get("http://localhost:8000/users")
            .then(response => {
                const account = response.data.find((user) => (user.username === getUsername));
                if (account) {
                    console.log("match")

                        console.log(account.items)

                        axios.patch(url, checkout)
                            .then((res) => {
                                console.log(res.status)
                                confirmation()
                            })
                }
            })
            }

    return (
        <Container className="py-4 mt-5">
            <h1 className="my-5 text-center"  style={{
                color: "rgb(220,220,232)",
                position:"absolute",
                left: "37%",
                width: "400px",
                textShadow: "0px 0px 4px #12a0a0"

            }}>
                {isEmpty? 'Your Cart is Empty' : 'Current Items'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover  className="mb-5">
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ padding: '.5rem'}}>
                                            <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                        {item.title}
                                    </h6>
                                </td>
                                <td style={{
                                    color:"whitesmoke",
                                    textShadow: "0px 0px 4px #12a0a0"
                                }}>$ {item.price}</td>
                                <td style={{
                                    color:"whitesmoke",
                                    textShadow: "0px 0px 4px #12a0a0"
                                }}>Quantity ({item.quantity})</td>
                                <td>
                                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2" style={{
                                        textShadow: "0px 0px 4px #12a0a0"
                                    }}>-</Button>
                                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2" style={{
                                        textShadow: "0px 0px 4px #12a0a0"
                                    }}>+</Button>
                                    <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2" style={{
                                        textShadow: "0px 0px 4px #12a0a0"
                                    }}>Remove Item</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                {!isEmpty &&

                    <Row
                        style={{ position: 'fixed', bottom: 50}}
                        className=" justify-content-center w-100"
                    >
                        <StripeContainer/>
                        {/* <StripeCheckout/> */}
                        <Col className="k">
                            {/*<h4>Total Price: $ {cartTotal}</h4>*/}
                        </Col>
                        <Col className="p-0" md={4}>
                            <motion.button variant="danger"
                                    className="m-2"
                                    onClick={()=> emptyCart()}
                                           whileHover={{
                                               scale: 1.1,
                                               textShadow:  "0px 0px 8px rgb(255, 255, 255)",
                                               boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                                               borderRadius: "20%"
                                           }}
                                           style={{

                                               backgroundColor: "red",
                                               color: "black",
                                               display: "block",
                                               marginLeft: "142mm",
                                               // marginRight: "auto",
                                               width: "25%",
                                               marginTop:"10px",
                                               padding:"10px",
                                               fontWeight:"bolder",
                                               fontSize:"larger"

                                           }}
                            >
                                <BsCartX size="1.3rem" />
                                Clear Cart
                            </motion.button>

                             {/*<Button variant="success"*/}
                             {/*        className="m-2"*/}
                             {/*onClick={userBoughtItems}*/}
                             {/*>*/}
                             {/*    <BsCartCheck size="1.7rem" />*/}
                             {/*    Pay*/}
                             {/*</Button>*/}

                        </Col>
                    </Row>}
            </Row>

            {/*{!isLoggedIn && !isEmpty && !googleSign && (*/}
            {/*  <div>*/}

            {/*     <GuestCheckout/>*/}
            {/*      <h4 style={{*/}
            {/*          position: "absolute",*/}
            {/*          left: "37%",*/}
            {/*          width: "400px",*/}
            {/*          textShadow: "0px 0px 4px #12a0a0"*/}
            {/*      }}>Total Price: $ {cartTotal}</h4>*/}

            {/*  </div>*/}
            {/*)}*/}

            {/*{googleSign && !isEmpty && (*/}
            {/*    <div>*/}
            {/*        */}

            {/*        <GuestCheckout/>*/}
            {/*        <h4 style={{*/}
            {/*            position: "absolute",*/}
            {/*            left: "37%",*/}
            {/*            width: "400px",*/}
            {/*            textShadow: "0px 0px 4px #12a0a0"*/}
            {/*        }}>Total Price: $ {cartTotal}</h4>*/}

            {/*    </div>*/}
            {/*)}*/}

        </Container>
    );
}

export default Cart