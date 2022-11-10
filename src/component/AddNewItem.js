import {useState} from "react";
import axios from "axios";

import {Button, Modal} from "react-bootstrap";
import React from "react";


const AddNewItem = () => {

    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [open, setOpen] = useState(false)


    let owner  = localStorage.getItem("authenticated")

    const url = "http://localhost:8001/Products"

    let quantityNumber = Number(quantity)
    let priceNumber = Number(price)

    function addItemToStore(event) {
        event.preventDefault()


        let newItem = {
            name:itemName,
            quantity:quantityNumber,
            price:priceNumber,
            category,
            image,
            Owner: owner
        }

        axios.post(url, newItem)
            .then(response => {
                if (response.status === 201 ) {
                    console.log(response.data)
                    console.log(response.status)
                    console.log(newItem)
                    cancelItem()
                }
            })
    }

    function addItem() {
        setOpen(true)
    }

    function cancelItem() {
        setOpen(false)
    }

    return (
        <div>

            <Button variant="primary" onClick={addItem} style={{
                float:"right"
            }}>
               Add Item
            </Button>

            <Modal show={open} onHide={cancelItem}>

                <Modal.Body>
            <div className="login-box">
                <div className="login">


            <form onSubmit={addItemToStore}>
                <div className="user-box">
                    <input className="username" type="text" required onChange={(event) => setItemName(event.target.value)}/>
                    <label>Name</label>
                </div>

                <div className="user-box">
                    <input type="text" className="email" required  onChange={(event) => setQuantity(event.target.value)}/>
                    <label>Quantity</label>
                </div>

                <div className="user-box">
                    <input type="text" className="password"  required   onChange={(event) => setPrice(event.target.value)}/>
                    <label>Price</label>
                </div>
                <div className="user-box">
                    <input type="text" className="password"  required   onChange={(event) => setCategory(event.target.value)}/>
                    <label>Category</label>
                </div>
                <div className="user-box">
                    <input type="text" className="password"  required  onChange={(event) => setImage(event.target.value)}/>
                    <label>Image</label>
                </div>


                <button id="submit" className="login-button" role="link">Add</button>
                <button  className="login-button" onClick={cancelItem} style={{
                    float:"right"
                }}> Cancel</button>
            </form>

                </div>

            </div>

                </Modal.Body>

            </Modal>


        </div>
    )

}
export default AddNewItem