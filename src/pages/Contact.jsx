import { useContext } from "react";
import GlobalContext from "../state/globalContext";


function Contact(){
    const user = useContext(GlobalContext).user


    return(
        <div>
            <h1>Contact Page</h1>
            <div class="card">
                <div class="card-body">
                    <p> Hi there I am {user.name}</p>
                    <p>My email is: {user.email}</p>
                </div>
            </div>
        </div>

    )
}

export default Contact
