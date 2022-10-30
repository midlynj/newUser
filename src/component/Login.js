import {useState} from "react";
import axios from "axios";
import "./login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));




    const handleSubmit = (e) => {
        e.preventDefault()
        const checkForValidCredentials = axios.get("http://localhost:8000/users")
            .then(response => {
                console.log(response.data)

                const account = response.data.find((user) => (user.username === username));
                if (account && account.password === password) {
                    setAuthenticated(true)
                    localStorage.setItem("authenticated", username);
                    console.log("match")
                    console.log(localStorage)
                } else {
                    console.log("no match")
                }
            })
    }


    return (

        <div className="login">

            <div className="login-box">
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
                    <input type="submit" value="Submit" className="login-button"/>
                </form>
            </div>
            {/*<p>Welcome Back</p>*/}
            {/*<form onSubmit={handleSubmit}>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="Username"*/}
                {/*    placeholder="username"*/}

                {/*    onChange={(e) => setUsername(e.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type="password"*/}
                {/*    name="Password"*/}
                {/*    placeholder="password"*/}

                {/*    onChange={(e) => setPassword(e.target.value)}*/}
                {/*/>*/}
                {/*<input type="submit" value="Submit" className="login-button"/>*/}
            {/*</form>*/}
        </div>




    )

}
export default Login