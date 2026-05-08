import { IconMoodPuzzled } from '@tabler/icons-react';


function NotFound(){
    return(
        <div>
            <IconMoodPuzzled  color="red" size={55} stroke={2} className='my-2'/>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for doesn't exist</p>
        </div>
    )
}


export default NotFound;