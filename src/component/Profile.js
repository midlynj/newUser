import UpdateInfo from "./updateInfo";
import axios from "axios";
import {useEffect, useState} from "react";
import UserGreeting from "./UserGreeting";
import "../profile.css"
import {Link} from "react-router-dom";
import {useCart} from "react-use-cart";
import "./meep.css"


const MyProfile = () => {

    let user = localStorage.getItem("authenticated")
    // let userAddress = loc

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems
    } = useCart();


    const loggedUser = localStorage.getItem("authenticated")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


        const [count, setCount] = useState(0);

        // Similar to componentDidMount and componentDidUpdate:

            // Update the document title using the browser API
            // document.title = `You clicked ${count} times`;







    const checkForValidCredentials = axios.get("http://localhost:8000/users")
        .then(response => {
            // console.log(response.data)

            const account = response.data.find((user) => (user.username === loggedUser))

            if (account) {
                // localStorage.setItem("a",account.username)
                // console.log(localStorage.getItem("a"))
setEmail(account.email)
                setAddress(account.address)
                console.log(account)
                console.log(account.items)

                // window.open("http://localhost:3000","_self")
            } else {
                console.log("no match")
                // let notValid = document.getElementById("invalid")
                // notValid.innerText = "Username or Password is incorrect"
            }
        })


    return(
        <div className="profile">

            <div>


                    {/*<li>*/}
                    {/*    <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Notifications</a>*/}
                        {/*<a className="header-menu-number" href="#4">{totalItems}</a>*/}
                    {/*</li>*/}





               you pressed {count} times
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>



            </div>



          <div>
              <UserGreeting/>

          </div>



            {/*<UpdateInfo/>*/}

            <div className="id-card-wrapper">
                <div className="id-card">
                    <div className="profile-row">
                        <div className="dp">
                            <div className="dp-arc-outer"></div>
                            <div className="dp-arc-inner"></div>
                            <img src="data:image/jpeg;base64,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"/>
                        </div>
                        <div className="desc">
                            <h1>{user}</h1>
                            <p>E-mail: {email}</p>
                            <p>Address: {address}</p>
                            <UpdateInfo/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MyProfile