import {GoogleLogin} from "react-google-login"
import {useEffect} from "react";
import {gapi} from "gapi-script";
import GOOGLE_KEY from "../private/GooglePrivate.ts"

const GoogleLoginnt = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: googleUser,
                scope:""
            })
        }
        gapi.load("client:auth2", start)
    })

    const googleUser = GOOGLE_KEY

    const onSuccess = (response) => {
        console.log("Login success! Current user:", response);
       localStorage.setItem("googleSignIn", response.profileObj.givenName)
        localStorage.setItem("googleEmail", response.profileObj.email)
        alert("Sign In Successful")
        window.open("http://localhost:3000","_self")

    }

    const onFailure = (response) => {
        console.log("Login failed!", response);

    }

    return (

        <div id="signInButton" style={{
          fontSize:"xxx-large",
            fontWeight:"bolder",
            marginTop:"212px",
            marginLeft:"22mm"
        }}>


            <GoogleLogin

                clientId={googleUser}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}

            />

        </div>

    )

}
export default GoogleLoginnt