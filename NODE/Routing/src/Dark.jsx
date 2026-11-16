import React from 'react';
import { Link } from 'react-router-dom';
import './DL.css'

const Dark = ()=>{
    return(
        <>
        <div className='div1'>
            <Link to='Light'><button className='btn1'>Click to Light-mode</button></Link>
        </div>

        </>
    )
}
export default Dark