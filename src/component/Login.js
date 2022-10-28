import {useState} from "react";
import axios from "axios";

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

        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder="username"

                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="password"

                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>




    )

}
export default Login