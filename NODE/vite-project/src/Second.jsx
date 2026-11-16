import React from "react"

function Second(){
const display={
    Name : 'Hedy Lammar',
    imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
    Width:200,
    height:200,
    

}

const name='minakshi'
    return(
        <>
        <h1>Second Component Deatils</h1>
        <h2>Name:{display.Name}</h2>
        <img src={display.imageUrl} alt=""
         style={{
            width:display.Width,
            height:display.height,
           

        }
         }
        />
        <h1>My name is : {name}</h1>
        </>
    )
}
export default Second