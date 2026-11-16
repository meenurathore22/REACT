import React from "react";
import { useState , useEffect} from "react";
import { useRef } from "react";

function First(){

    const [data,setData] = useState('')

    const count = useRef(0)

    // useEffect(()=>{
       
    //     // count.current= count.current+1
    //  })
    const Add = () =>{
        setData (count.current= count.current+1)  
    }

    return(
        <>
        <input type="text" placeholder="Enter anything"  value={data} onChange={(e)=>{
            setData(e.target.value)
            // count.current= count.current+1
        }}/>
        <button onClick={Add}>click</button>
        <h2>{count.current}</h2>
        </>
    )
}
export default First