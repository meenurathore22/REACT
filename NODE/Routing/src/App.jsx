
import { Routes,Route } from 'react-router-dom'
import Dark from './Dark'
import Light  from './Light'


function App() {
  


  return (
    <>
<Routes>
  <Route path="/" element={<Dark/>}/>
  <Route path="/Light" element={<Light/>}/>
</Routes>
    
     
    </>
  )
}

export default App
