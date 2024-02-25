import React, {useState, useEffect} from 'react';
import { Box } from '@mui/system';
import Lottie from 'lottie-react';
import NoInternet1 from "../assets/animations/NoInternet_anim.json"
import NoInternet2 from "../assets/animations/NoInternet_anim2.json"

const NoInternet = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(
          <Box sx={{height:'90vh'}}>
            <Lottie 
                animationData={NoInternet1}
                style={{width:'50%'}}
                loop
            />
          </Box>
        )
    }
}

export default NoInternet;