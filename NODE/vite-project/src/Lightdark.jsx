import React from "react";
import { useState } from "react";
import './DarkLight.css'

const Lightdark = ()=>{

const [dark , setDark] = useState(false)

const Change = ()=>{
    setDark(!dark)
} 

     return(
        <>

        {/* <div className={`App ${dark ? 'darkmode' : 'lightmode'}`}> */}
        
       <div className="App">
        <div className={dark ? "darkmode" : "lightmode"}>
       
        <button onClick={Change}>
        {
             dark ? <h2 className="light">Switch to LightMode</h2> : <h2 className="dark">Switch to DarkMode</h2>
        }
        </button>
        </div>
        </div>
        </>
     )
}
export default Lightdark 