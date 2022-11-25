import {GoogleLogout} from "react-google-login";
import GOOGLE_KEY from "../private/GooglePrivate.ts"


const Meep = () => {
    const googleUser = GOOGLE_KEY;
    const onSuccess = () => {
        console.log("Logout successful")
        localStorage.clear()
        window.open("http://localhost:3000","_self")
        alert("Sign Out Successful")


    }

    return (

        <div id="signOutButton" style={{
            fontSize:"xxx-large",
            fontWeight:"bolder",
            marginTop:"212px",
            marginLeft:"22mm"
        }}>
            <GoogleLogout
                clientId={googleUser}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}

            />


        </div>
    )
}
export default Meep