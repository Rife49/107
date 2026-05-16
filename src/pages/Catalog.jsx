import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";


function Catalog(){
    // const products = []; 
    const [products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]); // to hold the categories 
    const [prodsToDisplay, setProdsToDisplay] = useState([]); // to hold thew products to show 

    //use Effect runs when the component loads 
    useEffect(function (){
        console.log("Component Loaded")
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();
    },[]// the empty array [] means: "run this function only once"

    );


    function loadCatalog(){
        let service  = new DataService();
        let data = service.getProducts();
        setProdsToDisplay(data);// diplay all the products 
        let cats = ["Lamborghini", "Ferrari", "Mercedes"];
        setCategories(cats);
    }

    function filter(category){
        let list = [];
        // find the products that match category
        for(let i=0; i<products.length;i++)
        {
            let prod = products [i];
            if (prod.category ===category)
            {
                list.push(prod);
            }
        }s
        setProdsToDisplay(list);

    }


    return(
        <div>
            <div class="card">
                <div class="card-body">
                    <h1>Check out our amazing</h1>
                </div>
            </div>


            <div className="row">
                {categories.map( cat => <button key={cat} className="btn btn-dark" onClick={() => filter(cat)}> {cat} </button>)}
                <br/>
                {prodsToDisplay.map(prod => <Product key ={prod._id} data={prod}/> )}
                
            </div>
        </div>
            

    )


}


export default Catalog;