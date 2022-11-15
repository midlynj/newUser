import UpdateInfo from "./updateInfo";
import axios from "axios";
import {useState} from "react";
import UserGreeting from "./UserGreeting";


const MyProfile = () => {



    const loggedUser = localStorage.getItem("authenticated")



    const checkForValidCredentials = axios.get("http://localhost:8000/users")
        .then(response => {
            // console.log(response.data)

            const account = response.data.find((user) => (user.username === loggedUser))

            if (account) {
                // localStorage.setItem("a",account.username)
                // console.log(localStorage.getItem("a"))

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
        <div>

          <div>
              <UserGreeting/>

          </div>



            <UpdateInfo/>

        </div>
    )
}
export default MyProfile