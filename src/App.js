import './App.css';
import Navigation from "./navbar/Navigation";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Error from "./component/Error";
import Products from "./component/Products";
import Cart from "./component/Cart";
import ThankYou from "./component/ThankYou";
import NewHome from "./component/NewHome";
import Profile from "./component/Profile";



function App() {
    // const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));


    return (

      <Router>
            <div className="App">

              <Navigation/>

                <div className = "content">

                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/register" element={<Register/>}/>

                        <Route path="/login" element={<Login/>}/>

                        <Route path="/logout" element={<Logout/>}/>
                        {/*<Route path="/parent" element={<Parent/>}/>*/}
                        <Route path="/store" element={<Products/>}/>

                        <Route path="/thankyouforyourpurchase" element={<ThankYou/>}/>

                        <Route path="/myProfile" element={<Profile/>}/>

                        <Route path="/newhome" element={<NewHome/>}/>







                        <Route path="/cart" element={<Cart/>}/>




                        <Route path="*" element={<Error/>}/>



                    </Routes>

                </div>
            </div>
      </Router>

  );
}

export default App;
