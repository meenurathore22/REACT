import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{

    return(
        <>
        <h1>hello Home</h1>
        <Link to='Contact'><button>Contact</button></Link>
        <Link to='Apply'><button>Apply</button></Link>
        </>
    )
}
export default Home