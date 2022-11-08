import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {useCart} from "react-use-cart";
import {useNavigate} from "react-router-dom";

const  GuestCheckout = () => {

    const [open, setOpen] = useState(false)
    const [name, setName]  = useState("");
    const [email, setEmail]  = useState("");
    const [address, setAddress] = useState("")

    const timeOfPurchase = Date()

    const navigate = useNavigate();

    const confirmation  = () => {
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

        function guestCheckout(event) {
            event.preventDefault()

            const url = "http://localhost:8000/users"

            const guest  = {
                name,
                email,
                address,
                items,
                totalItems,
                cartTotal,
                timeOfPurchase
            }

            axios.post(url,guest)
                .then(response => {
                    if (response.status === 201 ) {
                        console.log(response.data)
                        console.log(response.status)
                        confirmation()

                    }
                } ).catch((error) => {
                console.log(error)
                console.log("could not process payment")
            })
        }
        function getGuestInfoForPayment() {
            setOpen(true)
        }

        function cancelGuestPayment() {
            setOpen(false)
        }

        return (
            <>
                <div
                    className="d-flex align-items-center justify-content-center"

                >
                    <Button variant="primary" onClick={getGuestInfoForPayment}>
                        Pay As Guest
                    </Button>
                </div>
                <Modal show={open} onHide={cancelGuestPayment}>

                    <Modal.Body>

                        <div className="login">
                            <div className="login-box">

                        <form onSubmit={guestCheckout}>
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

                            <button id="submit" className="login-button" role="link">Pay ${cartTotal}</button>
                            <button  className="login-button" onClick={cancelGuestPayment} style={{
                                float:"right"
                            }}> Cancel</button>

                        </form>
                            </div>
                        </div>


                    </Modal.Body>

                </Modal>
            </>
        );

}
export default GuestCheckout