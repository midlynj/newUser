import "./newhome.css"

const NewHome = () => {

    return (
        <div className="newhome">

            <div className="grid-container">
                <nav className="slide-down">
                    <span id="logo">StacksNation </span>
                    <span>The One </span>
                    <span> and True</span>
                    <span> E-Commerce</span>
                </nav>
                <div  className="slide-down">
                </div>
                <div className="banner-text">
                    <h1><span className="reveal" style={{
                        fontSize:"40px"
                    }}><br/></span> <span className="reveal-2">Savings.</span></h1>
                </div>
                <div className="blurred-container">
                    <div className="blurred-banner" >

                        <p className="orange-text">StacksNation.</p>
                        <p style={{
                            fontSize:"20px",
                            marginLeft:"20px"
                        }}>We  sell limited production, limited edition and special edition clothing and products.</p>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default NewHome