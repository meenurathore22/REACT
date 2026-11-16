import React, { useState } from "react";

const Input = ()=>{

const [name,setName] = useState('minakshi')
const [pass,setPass] = useState('12345')
const[email,setEmail] = useState('minakshi@123')

const changeName = (e)=>{
    setName(e.target.value)
}
const changePass = (e)=>{
    setPass(e.target.value)
}
const changeEmail = (e)=>{
    setEmail(e.target.value)
}

const local = ()=>{
    const object={
        Name:name,
        Pass:pass,
        Email:email
    }
 array.push(object) 
 localStorage.setItem('objkey',JSON.stringify(array))

}
const array=[]



    return(
        <>
        <h1>My Signup Form</h1>
        <input type="text" placeholder="Enter Your Name" onChange={changeName}/>   <span>Name is:{name}</span><br /><br />
        <input type="password" placeholder="Enter Your Password" onChange={changePass} />  <span>Password is:{pass}</span><br /><br />
        <input type="email" placeholder="Enter Your Email" onChange={changeEmail} />  <span>Email is:{email}</span><br /><br />
        <button onClick={local}>Add to local</button>
<br /><br /><br />
        <h1>My Login Form</h1>
        <input type="text" placeholder="Enter Name" /><br /><br />
        <input type="text" placeholder="Enter Password"/><br /><br />
        <button>Login</button>

        </>
    )
}
export default Input