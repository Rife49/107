import {useState} from "react"

function Admin() {
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const[coupons, setCoupons] = useState([]);

    function saveCoupon(){
        console.log(couponCode);
        console.log(couponDiscount);
    


const newCoupon = {
    code: couponCode,
    discount: couponDiscount
}

// spread operator
setCoupons([...coupons, newCoupon])
}

    return(
        <div>
            <h1>Admin Page</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h3>Add Products</h3>
                    
                    
                </section>

                <section className="w-50">
                    <h3>Add Coupons</h3>

                    <div className="card">
                        <div className="card-body">
                            <div className="text-start mb-4">
                                <label className="form-label">Code</label>
                                <input className="form-control" 
                                type="text" 
                                value={couponCode} 
                                onChange={(event) => setCouponCode(event.target.value)}
                                />
                            </div>

                            <div className="text-start mb-4">
                                <label className="form-label">Discount</label>
                                <input className="form-control" 
                                type="number" 
                                value={couponDiscount}
                                onChange={(event) => setCouponDiscount(event.target.value)}
                                />
                            </div>

                            <div>
                                <button className="btn btn-success" onClick={saveCoupon}>Save Coupon</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
} 

export default Admin;