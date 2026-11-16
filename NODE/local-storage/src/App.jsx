import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Bootstrap from './Bootstrap'



function App() {
// const[name,setName] = useState()
// const[password,setPassword] = useState()
// const[email,setEmail] = useState()

// function ChangeName(e){
//  setName(e.target.value)
// }

// const Changepass = (e)=>
// {
//   setPassword(e.target.value)
// }
// const ChangeEmail = (e)=>{
//   setEmail(e.target.value)
// }

// function local(){
//   const object ={
//     Name:name,
//     Pass:password,
//     Email:email
//   }
//   // localStorage.setItem('objkey',JSON.stringify(object))
 
  
//   array.push(object)
//   const string=localStorage.setItem('objkey',JSON.stringify(array))  
// }
// const array=[]




  return (
    <>
      {/* <h1>validation form</h1>
      <form>
        <label>Enter name:</label>
        <input type="text" value={name} onChange={ChangeName}/>
        <h3>userName is:{name}</h3>
        <input type="password" value={password}  onChange={Changepass}/>
        <h3>Password:{password}</h3>
        <input type="Email" value={email} onChange={ChangeEmail}/>
        <h3>Email:{email}</h3>


<br />
        <button onClick={local}>Add to local</button>
      </form>
    </> */}
    {/* <Input/> */}
    <Bootstrap/>
    </> 
  )
}

export default App
