import {useState} from "react";
import axios from "axios";

import {Button, Modal} from "react-bootstrap";
import React from "react";
import {motion} from "framer-motion";


const UpdateInfo = () => {

    const [password, setPassword] = useState(localStorage.getItem("password"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [address, setAddress] = useState(localStorage.getItem("address"))

    const [open, setOpen] = useState(false)

    let user = localStorage.getItem("id")

    const url = `http://localhost:8000/users/${user}`

    function updateUserInformation(event) {
        event.preventDefault()


        let newItem = {
            email,
            password,
            address

        }

        axios.patch(url, newItem)
                .then(response => {
                    if (response.status === 201 || response.status === 200) {
                        console.log(response.data)
                        console.log(response.status)
                        console.log(newItem)
                        cancelUpdate()
                    }
                })
    }

    function update() {
        setOpen(true)
    }

    function cancelUpdate() {
        setOpen(false)
    }

    return (
        <div>

            <motion.button variant="primary"   whileHover={{
                scale: 1.1,
                textShadow:  "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                borderRadius: "20%",

            }} onClick={update} style={{
                // float:"right",
                marginTop:"75px",
                marginLeft:"50px",
                borderRadius:"10%",
                color:"yellow",
                backgroundColor:"#7c0707",
                
                // marginRight:"-55px"
            }}>
               Update Information
            </motion.button>

            <Modal show={open} onHide={cancelUpdate}>

                <Modal.Body>
            <div className="login-box">
                <div className="login">


            <form onSubmit={updateUserInformation}>
                <div className="user-box">
                    <input className="username" type="text"  onChange={(event) => setAddress(event.target.value)}/>
                    <label>Address</label>
                </div>

                <div className="user-box">
                    <input type="text" className="email"   onChange={(event) => setEmail(event.target.value)}/>
                    <label>Email</label>
                </div>

                <div className="user-box">
                    <input type="text" className="password"     onChange={(event) => setPassword(event.target.value)}/>
                    <label>Password</label>
                </div>

                <button id="submit" className="login-button" role="link">Update</button>

            </form>
                    <button  className="login-button" onClick={cancelUpdate} style={{

                    }}> Cancel</button>

                </div>

            </div>

                </Modal.Body>

            </Modal>


        </div>
    )

}
export default UpdateInfo