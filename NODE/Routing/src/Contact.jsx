import React from "react";
import { Link } from "react-router-dom";


const Contact = () =>{
    return(

        <>
        <h1 style={{backgroundColor:'pink'}}>hello Contact</h1>
        <Link to='Apply'><button>Apply</button></Link>
        <Link to='/'><button>Home</button></Link>
        </>
    )
}
export default Contact