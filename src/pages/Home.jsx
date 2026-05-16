function Home(){
    return(
        <div>
            <h1>World of Cars & Nature</h1>
            <p>Welcome to the Best Canvas Art Work in the World !</p>

            <div className="d-flex flex-row">
                <div>
                    <img width={350} src="https://images.unsplash.com/photo-1597858520171-563a8e8b9925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>

                <div style={{marginTop: "200px"}}>
                    <img width={350} src="https://images.unsplash.com/photo-1598814165187-ed79437d7490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>

                <div >
                    <img width={500} style={{marginLeft: "100px"}} src="https://images.unsplash.com/photo-1605907153179-8b364644a241?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img style={{marginTop: "500px"}} style={{marginRight: "100px"}} width={550}src="https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                    
            
            </div>

            <div class="card">
                <div class="card-body">
                    Discover premium canvas artwork inspired by exotic cars, mountain landscapes, and adventure. Built for people who appreciate speed, nature, and timeless design.
                </div>
            </div>
        
        </div>

    )

}



export default Home