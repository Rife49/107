import {createContext} from "react"

//GlobalContext defines context structure

const GlobalContext = createContext ({
    user:{}, // default user is an empty object, can store info like name, email, etc
    cart:[], 


    // addProductToCart: function(){} old way 
    addProductToCart: () => {}, // standard way
    removeProductFromCart: () => {}
})

export default GlobalContext;