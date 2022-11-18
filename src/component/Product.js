import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import "./products.css"

const Product = (props) => {

    let { image, price, name} = props.product;

    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.product);
    }



    return (
        <div className="card" style={{
            margin: "20px"
        }}>
            {/*<h1>{props.product.name}</h1>*/}
            {/*<h1>${props.product.price}</h1>*/}
            {/*<h1>{<img src={props.product.image} alt=""/>}</h1>*/}

            <Card
                style={{
                    width: '18rem',
                    height: 'auto',
                    borderRadius: "20px",
                    background: "#e0e0e0",
                    border: "1px solid #000000c5"
                    // box-shadow:  32px 32px 65px #bebebe,
                    // -32px -32px 65px #ffffff;
                }}
                // className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
            >
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                    justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '20rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
                <Card.Body>
                    <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                        <Link style={{

                            textDecoration: "none",
                            color: "red"
                        }} to={`/newitems/${props.product.id}`}>
                            {name}
                        </Link>
                    </Card.Title>
                    <Card.Title>
                        $ <span className="h3">{price}</span>
                    </Card.Title>
                    <Button
                        onClick={()=> addToCart()}
                        // className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' } d-flex align-item-center meep-auto border-0`}
                    >
                        <BsCartPlus size="1.8rem" />
                        Add to cart
                    </Button>
                </Card.Body>
            </Card>


        </div>
    )

}
export default Product