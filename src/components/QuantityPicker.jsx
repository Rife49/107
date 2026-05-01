import { useState } from 'react';

function QuantityPicker(props) {
  // const [state, setState] = useState(initialValue); 
    const [quantity, setQuantity] = useState(1);

    function onAdd(){
        console.log("onAdd Function")
        setQuantity(quantity+1);
        props.onChange(quantity+1);
    }

    function onDecrease(){
        console.log("onDecrease Function")
        setQuantity(quantity-1);
        props.onChange(quantity-1);
    }

    return(
        <div className="text-center">
            <button className="btn btn-outline-secondary" onClick={onDecrease} disabled={quantity==1}>-</button>
            <label className="mx-2">{quantity}</label>
            <button className="btn btn-outline-secondary" onClick={onAdd}>+</button>
        </div>
    )
}

export default QuantityPicker;