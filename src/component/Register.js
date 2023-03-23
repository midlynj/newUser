import {useState} from "react";
import axios from "axios";



const Register = () => {

    const [username, setUserName]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")


    function newUser(event) {
        event.preventDefault()
        // prevent page from refreshing

        const user  = {
            username,
            email,
            password,
            address
        }
        // const url = "http://localhost:8081/api/users"
        const url = "http://localhost:8000/users"
            axios.get(url)
            .then(response => {
                console.log(response.data)

                const account = response.data.find((user) => (user.email === email))

                if (account) {
                    console.log(account.email)

                    console.log("email in use")

                } else {

                    console.log("new user created")

                }
            })



        console.log(localStorage)

    }

    return (
        <div className="rf">
            <div className="login-box">
                <h2>Join Us</h2>
                <form onSubmit={newUser}>
                {/*<div className="user-box">*/}
                {/*    <input className="username" type="text" required onChange={(event) => setUserName(event.target.value)}/>*/}
                {/*    <label>Enter a Username</label>*/}
                {/*</div>*/}

               <div className="user-box">
                    <input type="email" className="email" required  onChange={(event) => setEmail(event.target.value)}/>
                    <label>Enter an Email</label>
               </div>

               <div className="user-box">
                    <input type="password" className="password"  required  minLength="3" onChange={(event) => setPassword(event.target.value)}/>
                    <label>Enter a Password</label>
               </div>

                    {/*<div className="user-box">*/}
                    {/*    <input type="text" className="password"  required  minLength="5" onChange={(event) => setAddress(event.target.value)}/>*/}
                    {/*    <label>Enter Address</label>*/}
                    {/*</div>*/}

               <button id="submit" className="login-button" role="link"> Register</button>

            </form>
        </div>
    </div>
    )

}
export default Register