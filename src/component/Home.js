import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Home = () => {
localStorage.getItem("authenticated")
    let checkForLogin = localStorage.getItem("authenticated")

    if (checkForLogin) {
        return <UserGreeting/>
    }  return <GuestGreeting/>
    // return (
    //
    //     <div className="home">
    //         Home screen
    //
    //         <p>{"Hello " +m}</p>
    //     </div>
    // )

}

export default Home