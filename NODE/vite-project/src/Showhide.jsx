import React from "react";
import { useState } from "react";

const Showhide = ()=>{
    const [status , setStatus] = useState(false)

// const show=()=>{
// setStatus(true)
// }

// const hide = () =>{
//     setStatus(false)
// }

const change = ()=>{
    setStatus(!status)
}

    return(
        <>
        {
            status?<h1>Hello React</h1>:null
        }
        {/* <button onClick={show}>Show</button>
        <button onClick={hide}>Hide</button> */}

        <button onClick={change}>click here</button>

        </>
    )
}
export default Showhide