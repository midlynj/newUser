import {useEffect, useState} from "react";
import axios from "axios";
import "./login.css"



const Register = () => {

    const [username, setUserName]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword] = useState("")

    function newUser(event) {
        event.preventDefault()
        // prevent page from refreshing

        const user  = {
            username,
            email,
            password
        }
        // const url = "http://localhost:8081/api/users"
        const url = "http://localhost:8000/users"

        axios.post(url, user)
            .then(response => {
                if (response.status === 201 ) {
                    console.log(response.data)
                    console.log(response.status)
                    localStorage.setItem("authenticated",username)
                    window.open("http://localhost:3000","_self")
                }
            } ).catch((error) => {
            console.log(error)
            console.log("could not complete registration")
        })

        console.log(localStorage)

    }

    return (
        <div className="login">
            <div className="login-box">
                <h2>Join Us</h2>
                <form onSubmit={newUser}>
                <div className="user-box">
                    <input className="username" type="text" required onChange={(event) => setUserName(event.target.value)}/>
                    <label>Enter a Username</label>
                </div>

               <div className="user-box">
                    <input type="email" className="email" required  onChange={(event) => setEmail(event.target.value)}/>
                    <label>Enter an Email</label>
               </div>

               <div className="user-box">
                    <input type="password" className="password"  required  minLength="3" onChange={(event) => setPassword(event.target.value)}/>
                    <label>Enter a Password</label>
               </div>

               <button id="submit" className="login-button" role="link"> Register</button>

            </form>
        </div>
    </div>
    )

}
export default Register