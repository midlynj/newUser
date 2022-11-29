import {Link} from "react-router-dom";
import "./navbar.css"
import {useCart} from "react-use-cart";

const Navigation = () => {

    const {
        totalItems
    } = useCart();

    // let isLoggedIn = localStorage.getItem("authenticated")
    let googleSign = localStorage.getItem("googleEmail")

    return (
        <nav className= "navbar navbar-default navbar-fixed-top navbar-shrink" style={{
            padding:"15px"
        }}>
            <div  className= "links">
                <Link to="/" style={{
                    float:"left"
                }}>StacksNation</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                {/*<Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*<Link to="/parent">parent</Link>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                <Link to="/store">Store</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/cart">Cart
                    <a className="header-menu-number">{totalItems}</a>
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;

                {/*<Link to="/user">user</Link>&nbsp;&nbsp;&nbsp;&nbsp;*/}

                {!googleSign ? (
                    <>
                        {/*<Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                        <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                   </>

                    )

                    : (
                        <>
                            {/*<Link to="/myProfile">Profile</Link>*/}
                            <Link to="/logout" style={{float:"right"}}>logout</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                )}

            </div>
        </nav>

    )

}
export default Navigation