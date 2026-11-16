import React from "react";
import { useState } from "react";

function Bootstrap (){

const [color,setColor]=useState(false)





//     let name='minakshi'
//    let age=20


//    localStorage.setItem('key1',name)
//    localStorage.setItem('key2',age)
//    let name1=localStorage.getItem('key1')
//    let age1=localStorage.getItem('key2')
//    console.log(name1,age1)


//    const object ={
//     name:'minu',
//     age:20,
//     address:'pithampur'
//    }
//    localStorage.setItem('Obj',JSON.stringify(object))
//    const obj=JSON.parse(localStorage.getItem('Obj'))
//    console.log(obj)
    return(
        <>
        {/* <h1>{name}</h1>
        <h1>{age}</h1> */}

<h1>My favourate color is {color?"red":"blue"}</h1>

<button onClick={()=>setColor(!color)}>click</button>
        

        </>
    )
}
export default Bootstrap;