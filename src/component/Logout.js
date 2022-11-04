const Logout = () => {
    localStorage.clear()
    window.open("http://localhost:3000","_self")

    return (
        <div>
            thanks come again
        </div>
    )

}
export default Logout