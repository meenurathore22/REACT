import React from "react";
import './Facebook.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Facebook = () =>{

const[email,setEmail] = useState('')
const[pass,setPass] = useState('')

const changeEmail = (e)=>{
    setEmail(e.target.value)
}

const changePass = (e)=>{
    setPass(e.target.value)
}



 const LogIn = () =>{

            const parse=JSON.parse(localStorage.getItem('signKey'))
        console.log(parse)

if(parse.Email==email&&parse.Confirm==pass){
    alert('Login Successfully')
}
else{
    alert('Incorrect Email Password')
}
}
    return(

        <>
       
        <div className="main">
            <div className="div1">
                <h1>facebook</h1>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="div2">
                <form>
                    <input type="text" placeholder="Email address or Phone number" className="Linput" onChange={changeEmail}/>
                    <input type="password" placeholder="Password" className="Linput" onChange={changePass}/>
                   <button className="log" onClick={LogIn}>Log in</button>
                    <button className="forgot">Forgotten password?</button>
                    <hr />
                  <Link to='/Create'><button className="create">Create new account</button></Link>
                </form><br /><br /><br />
                <p style={{fontSize:'17px'}}> <strong>Create a Page</strong> for a celebrity, brand or business</p>
            </div>
            


        </div>
        </>
    )
}
export default Facebook