import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
 
  // const name = 'Naman'
  // const age = 17

  // localStorage.setItem('name',name)
  // localStorage.setItem('age',age)
useEffect(()=>{
  const Person = {
    name:'Naman',
    age:20
  }
  localStorage.setItem('objKey',JSON.stringify(Person))
  const get = localStorage.getItem('objKey')
  const detail= JSON.parse(get)
  console.log(detail)
},[])
  

  return (
    <>
      
    </>
  )
}

export default App
