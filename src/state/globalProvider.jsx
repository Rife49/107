import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    const [user, setUser] = useState({ name: "Rife", id: 66, email: "Rife90@sdgku.com"});
    const [cart, setCart] = useState([]);

    function addProductToCart(product) {
        setCart([...cart, product])
    }

    function removeProductFromCart(productId) {
        const updatedCart = cart.filter(product => product._id !== productId)
        setCart(updatedCart)
    }


    // Return the context provider, passing down state and functions as value
    return (
        <GlobalContext.Provider value={{
            user: user, // current user state 
            cart: cart, 
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children} {/* Render any child components inside the provider */}
        </GlobalContext.Provider>

    )
}



export default GlobalProvider;