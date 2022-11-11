import {useNavigate} from "react-router-dom";
import {useCart} from "react-use-cart";
import {
    Avatar,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import React from "react"
import LoremIpsum from 'react-lorem-ipsum';
import "./confirmation.css"


const ThankYou = () => {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems
    } = useCart();

    const navigate = useNavigate();

    // const returnToHome  = () => {
    //     emptyCart()
    //     navigate("/")
    // }
    // setTimeout(returnToHome,5000)
    let confirmationNumber = ""

    function confirmationNumberGenerator(length) {

        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            confirmationNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(confirmationNumber)

    } confirmationNumberGenerator(15)


    return (
        <div className="confirmation">
            <h1 style={{

                color:"#033b42"
            }}>Thank you for your purchase!</h1>
            <CircularProgress style={{
                margin: "20px"
            }} />
            <h2 style={{
                margin:"20px"
            }}>Your order is on it's way</h2>
            <h2 style={{
                marginBottom:"50px"
            }}>Your confirmation number is {confirmationNumber}</h2>

        </div>
    )

}

export default ThankYou