import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <nav className= "navbar">
            <div  className= "links">
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;

            </div>
        </nav>

    )

}
export default Navigation