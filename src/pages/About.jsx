import { useState } from "react";
import { IconMail, IconMailOff } from '@tabler/icons-react';


function About(){
// const [state, setState] = useState(intialValue);

const [firstName, setFirstName] = useState("Rife");
const [isEmailVisible, setIsEmailVisible] = useState(false);


function showEmail() {
    console.log("showing email");
    setIsEmailVisible(true)
}

function hideEmail() {
    console.log("Hiding email");
    setIsEmailVisible(false)
}




    return(
        <div>
            <h1>About Page</h1>
            <div class="card">
                <div class="card-body">
                    At World of Cars & Nature, we believe great artwork should inspire
                    emotion, passion, and adventure. Our collection combines the beauty
                    of iconic automobiles with breathtaking natural scenery to create
                    canvas pieces that stand out in any space. Whether you’re a car
                    enthusiast, outdoor explorer, or someone who appreciates bold design,
                    our mission is to bring energy and personality to your walls.
                </div>
            </div>
        {
            isEmailVisible == true
            ? <p>Rife90@sdgku.com</p> 
            : <p className="text-success"> Click the button to see my email address</p>
        }

        <button className="btn btn-danger rounded-top-5 me-2" onClick={hideEmail}>
            <IconMailOff  className="me-2"/>
            Hide my email
        </button>
        
        <button className="btn btn-success rounded-top-5" onClick={showEmail}>
            <IconMail className="me-2" />
            Show my email
        </button>
        
        <div className="my-4">
            <img width={500} src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D" alt="my about picture" />
        </div>
        
        </div>
    )
}



export default About;