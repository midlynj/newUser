import {useState} from "react";
import axios from "axios";
import "./login.css"
import GoogleLogin from "./GoogleLogin";
import Meep from "./Meep";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault()
        const checkForValidCredentials = axios.get("http://localhost:8000/users")
            .then(response => {
                console.log(response.data)

                const account = response.data.find((user) => (user.username === username))

                if (account && account.password === password) {
                    console.log(account)
                    localStorage.setItem("authenticated", username);
                    console.log("match")
                    localStorage.setItem("id",account.id)
                    localStorage.setItem("address",account.address)
                    localStorage.setItem("password",account.password)
                    localStorage.setItem("email",account.email)

                    console.log(localStorage)
                    window.open("http://localhost:3000","_self")
                } else {
                    console.log("no match")
                    let notValid = document.getElementById("invalid")
                    notValid.innerText = "Username or Password is incorrect"
                }
            })
    }


    return (

        <div className="login">

            {/*<GoogleLogin/>*/}
            {/*<Meep/>*/}

            <div className="login-box">
                <p id="invalid" style={{
                    color: "white"
                }}></p>
                <h2>Welcome back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type="text"
                            name="Username"
                            required

                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Username</label>


                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            name="Password"
                            required

                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <label>Password</label>

                    </div>
                    <input type="submit" value="Log In" className="login-button"/>
                </form>

            </div>
        </div>




    )

}
export default Login