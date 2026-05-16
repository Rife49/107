import { useContext} from "react";
import GlobalContext from "../state/globalContext";


import {Link} from "react-router";

import { IconGardenCart } from '@tabler/icons-react';

import "./NavBar.css"

function NavBar(){
    const user = useContext(GlobalContext). user; //({name: "Rife", id: 66});
    const cart = useContext(GlobalContext). cart;

    function getTotalItems () {
        let sum = 0; 

        for(let index=0; index<cart.length; index++){
            sum = sum + cart[index].quantity;
        }

        return sum;
    }



    return(
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Online Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/about"}>About</Link>
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                        <Link className="nav-link" to={"/catalog"}>Catalog</Link>
                        <Link className="nav-link" to={"/admin"}>Admin</Link>
                    </div>
                </div>

                <div className="text-white d-flex justify-center align-items-center gap-1">
                    {user.name}
                    <div>
                        <Link to={"/cart"} className="btn btn-outline-white">
                        <IconGardenCart stroke={2} />
                        Cart {getTotalItems()}
                        </Link>  
                    </div>
                </div>
            </div>
        </nav>
    );
} 



export default NavBar;