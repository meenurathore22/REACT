import React, { useState } from "react";

function App(){
const [count,setCount]=useState(0);
const[show,setShow]=useState(true);

  return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    <button onClick={()=>setShow(!show)}>Toggle</button>
    {show&& <h1>Hello React</h1>}
    
    </>
  )

}
export default App








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import First from './First'

// function App() {
// const[count,setCount]=useState(0)
// function handleClick(){
//   setCount(count+1)
// }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={handleClick}>click</button>
//       <First/>
//     </>
//   )
// }

// export default App
