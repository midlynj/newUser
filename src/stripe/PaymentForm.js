import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import React, {useState} from 'react';
import {BsCartCheck} from 'react-icons/bs';
import {useCart} from 'react-use-cart';
import {useNavigate} from "react-router-dom";


const PaymentForm = () => {

    const navigate = useNavigate()

    const userId = localStorage.getItem("id")
    let isLoggedIn = localStorage.getItem("authenticated")
    const timeOfPurchase = Date()


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
                    customer: isLoggedIn,
                    timeOfPurchase,
                    paymentTotal:"$" +cartTotal
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
                        <CardElement options={CARD_OPTIONS}/>

                    {/*</div>*/}

                {/*</fieldset>*/}
                <button style={{

                    backgroundColor: "lightgreen",
                    color: "black",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "25%",
                    marginTop:"10px",
                    padding:"10px",
                    fontWeight:"bolder",
                    fontSize:"larger"

                }}>  Pay${cartTotal}</button>

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