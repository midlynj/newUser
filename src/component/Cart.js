import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import {BsCartCheck, BsCartX} from 'react-icons/bs';
import axios from "axios";
import GuestCheckout from "./GuestCheckout";



const Cart = () => {

    const userId = localStorage.getItem("id")
    let isLoggedIn = localStorage.getItem("authenticated")


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
                            })
                }
            })
            }

    return (
        <Container className="py-4 mt-5">
            <h1 className="my-5 text-center"  style={{
                color: "rgb(2, 23, 108)"
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
                                <td>$ {item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                    <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                {!isEmpty && isLoggedIn &&

                    <Row
                        style={{ position: 'fixed', bottom: 50}}
                        className=" justify-content-center w-100"
                    >
                        {/*<StripeContainer/>*/}
                        {/* <StripeChexkout/> */}
                        <Col className="k">
                            <h4>Total Price: $ {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                    className="m-2"
                                    onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>

                             <Button variant="success"
                                     className="m-2"
                             onClick={userBoughtItems}
                             >
                                 <BsCartCheck size="1.7rem" />
                                 Pay
                             </Button>

                        </Col>
                    </Row>}
            </Row>

            {!isLoggedIn && !isEmpty && (
              <div>

                 <GuestCheckout/>
                  <h4>Total Price: $ {cartTotal}</h4>

              </div>
            )}

        </Container>
    );
}

export default Cart