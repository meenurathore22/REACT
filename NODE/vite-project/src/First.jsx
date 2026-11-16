import React from "react";
import Third from "./Third"

function First(){
    const personDetails={
        Name:'Minakshi',
        Age:20,
        Address:'LIG'
    }

    return(
        <>
        <h1>First Component Details</h1>
       <h2>Person name is : {personDetails.Name}</h2>
       <h2>Person age is : {personDetails.Age}</h2>
       <h2>Person address is : {personDetails.Address}</h2>

       <Third/>
        </>
    )
}
export default First