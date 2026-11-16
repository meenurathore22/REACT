import { createContext } from 'react'
import CompA from "./CompA"


const data = createContext()
const data1 = createContext()
const data2=createContext()
function App() {
  
  const name = 'Minakshi';
  const age=20;
  const address = 'Pithampur'
  return(
    <>
      
      <data.Provider value={name}>
          <data1.Provider value={age}>
              <data2.Provider value = {address}>
                <CompA/>
              </data2.Provider>
          </data1.Provider>
      </data.Provider>

    </>
  )
}

export default App
export {data,data1,data2}
