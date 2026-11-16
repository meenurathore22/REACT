import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const[count,setCount] = useState(1)
  const[name,setName]=useState('')

  
const add = () =>{
  setCount(count+1)
}





useEffect(()=>{
  console.log('hello')
  // setName(`You Click me ${count} time`)

  // if(count>=5){
  //   setName('After 5')
  // }
  // if(count>=1){
  //   setName(`${name} isha`)
  // }
//  if(count>=1){
// setName(`${name} hello `)
// }
},[count])

  return (
    <>
      
      {/* <input type="text" onChange={changeName} />
      <h1>{name}</h1> */}
      <button onClick={add}>click me</button>
      <h1>{name}</h1>
      <h1>{count}</h1>
      
     
    </>
  )
}

export default App
