import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import React, {useState} from 'react';
import {BsCartCheck} from 'react-icons/bs';
import {useCart} from 'react-use-cart';
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import GuestCheckout from "../component/GuestCheckout";


const PaymentForm = () => {

    const navigate = useNavigate()

    const userId = localStorage.getItem("id")
    // let isLoggedIn = localStorage.getItem("authenticated")
    const timeOfPurchase = Date()
    const [name, setName]  = useState("");
    const [email, setEmail]  = useState("");
    const [address, setAddress] = useState("")


    function meep() {
        // window.open("http://localhost:3000/newitems", "_self")
        // emptyCart()
        navigate("/thankyouforyourpurchase")
    }

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems
    } = useCart();

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#87bbfd" }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    }

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const submitPayment = async (event) => {

        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod(
            {
                type: "card",
                card: elements.getElement(CardElement)

            })

        if (!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:8000/users",{

                    paymentId:id,
                    items,
                    customer: name,
                    email,
                    address,
                    timeOfPurchase,
                    paymentTotal:"$" + cartTotal,
                    totalItems
                })
                console.log(response)
                console.log(response.data)

                if (response.status === 201) {
                    console.log("Successful payment")
                    setSuccess(true)
                    // emptyCart()
                    meep()
                    alert("Payment Successful, thank you shop again!!!")
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }


    return (
        <>

            {!success ?
            <form onSubmit={submitPayment}>
                {/*<fieldset className="formGroup">*/}
                    {/*<div className="formRow">*/}
                <div className="login">
                    <div className="login-box">
                <div className="user-box">
                    <input className="username" type="text" required onChange={(event) => setName(event.target.value)}/>
                    <label>Enter Name</label>
                </div>

                <div className="user-box">
                    <input type="email" className="email" required  onChange={(event) => setEmail(event.target.value)}/>
                    <label>Enter Email</label>
                </div>

                <div className="user-box">
                    <input type="text" className="password"  required  minLength="3" onChange={(event) => setAddress(event.target.value)}/>
                    <label>Enter Address</label>
                </div>
                <CardElement options={CARD_OPTIONS}/>

                    {/*</div>*/}

                {/*</fieldset>*/}
                <motion.button  whileHover={{
                    scale: 1.1,
                    textShadow:  "0px 0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    borderRadius: "20%"
                }}
                                style={{

                    backgroundColor: "lightgreen",
                    color: "black",
                    display: "block",
                    // marginLeft: "50",
                    // marginRight: "auto",
                    // width: "25%",
                    marginTop:"13px",
                    padding:"10px",
                    fontWeight:"bolder",
                    fontSize:"larger"

                }}>  Pay${cartTotal}</motion.button>
                    </div>
                </div>

            </form>
                :

                <div>

                    <h2>Thank you for your purchase</h2>

                </div>
            }



        </>


    )
}

export default PaymentForm