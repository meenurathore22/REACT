import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateA = () =>{

const[user,setUser] = useState('')
const[email,setEmail] = useState('')
const[pass,setPass] = useState('')
const[Cpass,setCpass] = useState('')

const changeUser = (e) =>{
    setUser(e.target.value)
}
const changeEmail = (e) =>{
    setEmail(e.target.value)
}
const changePass = (e) =>{
    setPass(e.target.value)
}
const changeCpass = (e) =>{
    setCpass(e.target.value)
}

const SaveData = () =>{
    const signObject = {
        User : user,    
        Email : email,
        Pass : pass,
        Confirm : Cpass 
    }
    
if(pass!=Cpass){
    alert('Password incorrect')
    return;
    }
    else{
        localStorage.setItem('signKey',JSON.stringify(signObject))
        alert('SignUp Successfully ')
    }
    
    
    

}




    return(
        <>
        <div className="Sdiv">
            <form>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Enter username" className="Sinput" onChange={changeUser}/><br />
                <input type="text" placeholder="Enter Email or Phone number" className="Sinput" onChange={changeEmail}/><br />
                <input type="Password" placeholder="Password" className="Sinput" onChange={changePass}/><br />
                <input type="Password" placeholder="Confirm Password" className="Sinput" onChange={changeCpass}/>
                <Link to='/'><button className="signUp" onClick={SaveData}>Sign Up</button></Link>
                
            </form>
        </div>
        </>
    )
}
export default CreateA