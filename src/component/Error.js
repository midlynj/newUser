import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import {motion} from "framer-motion";


const Error = () => {
    const navigate = useNavigate();
    // useEffect(()=> {
    //     returnToHome()
    // })
    const returnToHome  = () => {
        navigate("/")
    }
    setTimeout(returnToHome,3000)

    return (

        <motion.div
            animate={{
                    // x: 0,
                    // backgroundColor: "red",
                   boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                    // position: "fixed",
                textAlign:"center",

                margin: "60px"
                }}>
           Something went wrong
        </motion.div>
    )
}
export default Error