import axios from "axios";
import {Component} from "react";
import Product from "./Product";
// import User from "./User";

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []

        }

    }



    componentDidMount() {
        axios.get("http://localhost:8000/Products")
            .then((response) => {

                let product = []
                for (let productsKey in response.data) {
                    product.push({...response.data[productsKey],id:productsKey})
                }

                this.setState({
                    products:product,
                })
                console.log(product);
            })
    }

    render() {
        const products = this.state.products.map(product => {
            // return <User key={user.id} user={user}/>
            return<Product key={product.id} product={product}/>
        })

        return (

            <div>

                {products}

            </div>
        )
    }
}