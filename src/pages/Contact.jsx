import { useContext } from "react";
import GlobalContext from "../state/globalContet";


function Contact(){
    const user = useContext(GlobalContext).user


    return(
        <div>
            <h1>Contact Page</h1>
            <p> Hi there I am {user.name}</p>
            <p>My email is: {user.email}</p>
        </div>

    )
}

export default Contact