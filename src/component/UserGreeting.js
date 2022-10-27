function UserGreeting(props) {
    return <h1>Welcome back! {localStorage.getItem("authenticated")}</h1>;
}
export default UserGreeting