import QuantityPicker from "./QuantityPicker";
import {useState} from "react";



function Product(props){
    const[quantity,setQuantity] = useState(1);

    function handleQuantityChange(qty){
        console.log("New value", qty);
        setQuantity(qty);
    }
    
    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    
    return(
    <div className="card" style={{width: "18rem"}}>
            <img src={"/images/" + props.data.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="text-start">{props.data.title}</h5>
            <h6 className="text-start">${props.data.price.toFixed(2)}</h6>
            <h6 className = "total">{getTotal()}</h6>
            
            <QuantityPicker onChange={handleQuantityChange}/>


            <button href="#" className="btn btn-dark">Add to cart</button>
        </div>
    </div>
    )
}

export default Product;