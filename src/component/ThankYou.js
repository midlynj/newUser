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
    let randomConfirmationNumber = ""
    function confirmationNumberGenerator(length) {

        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            randomConfirmationNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(randomConfirmationNumber)

    } confirmationNumberGenerator(15)


    return (
        <div>
            <h1 style={{
                margin:"10px",
                color:"dodgerblue"
            }}>Thank you for your purchase!</h1>
            <CircularProgress style={{
                margin: "20px"
            }} />




            <h3 style={{
                margin:"10px"
            }}>Items below are currently being processed</h3>

            <h2>Your confirmation number is {randomConfirmationNumber}</h2>

            {items.map((item) => (
                <div className="thankyou" key={item.id} >

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={item.image} style={{
                                    width:"100%",
                                    height:"10vh"
                                }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                     <p>
                                        <LoremIpsum/>
                                     </p>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                    </List>

                </div>
            ))}


        </div>
    )

}

export default ThankYou