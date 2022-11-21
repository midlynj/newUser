import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./error.css"


const Error = () => {
    const navigate = useNavigate();
    // useEffect(()=> {
    //     returnToHome()
    // })
    const returnToHome  = () => {
        navigate("/")
    }
    // setTimeout(returnToHome,3000)

    return (

        <motion.div style={{
    fontSize:"xxx-large"

}} whileHover={{
    scale: 3.1,
    textShadow:  "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
}}>

    <div className="error">404</div>
    <br/><br/>
    <span className="info">Page Not Found</span>

</motion.div>
    )
}
export default Error