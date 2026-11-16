import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router,Route, Routes } from 'react-router-dom'
import Facebook from './Facebook'
import CreateA from './CreateA'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path='/' element={ <Facebook/>}/>
      <Route path='/Create' element={<CreateA/>}/>
    </Routes>
      

    </>
  )
}

export default App
