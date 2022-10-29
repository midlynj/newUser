import {Link, Route} from "react-router-dom";
import Logout from "../component/Logout";
import {useEffect, useState} from "react";
import "./navbar.css"

const Navigation = () => {

    let checkIfLogin = localStorage.getItem("authenticated")

    return (
        <nav className= "navbar">
            <div  className= "links">
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                {!checkIfLogin ? (
                    <>
                        <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                   </>

                    )

                    : (
                        <>
                            <Link to="/logout">logout</Link>
                    </>
                )}

            </div>
        </nav>

    )

}
export default Navigation