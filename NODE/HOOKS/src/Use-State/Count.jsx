import React from 'react'
import { useState } from 'react'

const Count = () => {
    const[count,setCount]=useState(0)
  return (
    <>
    <h1>{count}</h1>
      <button onClick={e=>setCount(count+1)}>Click</button>
    </>
  )
}

export default Count
