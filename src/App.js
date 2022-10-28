
import './App.css';
import Navigation from "./navbar/Navigation";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import Login from "./component/Login";
import Logout from "./component/Logout";
import {useState} from "react";

function App() {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));


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



                    </Routes>

                </div>
            </div>
      </Router>

  );
}

export default App;
