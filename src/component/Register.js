import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate();

    const [username, setUserName]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword] = useState("")
    // const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    function newUser(event) {
        event.preventDefault()
        // prevent page from refreshing

        const user  = {
            username,
            email,
            password
        }
        const url = "http://localhost:8000/users"

        axios.post(url, user)
            .then(response => {
                console.log(response.data)
            } )
        // setAuthenticated(username)
        localStorage.setItem("authenticated",username)


        console.log(localStorage)

        return navigate("/")


    }



    return (
        <div className="register">

            <form onSubmit={newUser}>
                <input className="username" type="text" placeholder="enter username" required onChange={(event) => setUserName(event.target.value)}/>
                <input type="email" className="email" placeholder="enter email" required  onChange={(event) => setEmail(event.target.value)}/>
                <input type="password" className="password" placeholder="enter password" required  minLength="3" onChange={(event) => setPassword(event.target.value)}/>
                <button id="submit" className="submit" role="link"> Register</button>
            </form>
        </div>
    )

}
export default Register