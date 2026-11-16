import './App.css'
import { Route,Routes } from 'react-router-dom'
import White from './White'
import Red from './Red'
import Pink from './Pink'
import Green from './Green'
import Blue from './Blue'
import { Link } from 'react-router-dom'
import './Style.css'




function App(){

    return(
        <>
        
       <Link to='Green'> <button>Green</button></Link>
        <Link to ='Pink'><button>Pink</button></Link>
        <Link to ='Red'><button>Red</button></Link>        
        <Link to ='/'><button>White</button></Link>
        <Link to='Blue'><button>Blue</button> </Link>

       <Routes>
        <Route path='/' element={<White/>}/>
        <Route path='/Red' element={<Red/>}/>
        <Route path='/Blue' element={<Blue/>}/>
        <Route path='/Pink' element={<Pink/>}/>
        <Route path='/Green' element={<Green/>}/>

       </Routes>
        
        </>
    )
}

export default App












// const App = () =>{
//     return(
//         <>
//          <Red/>
//         <White/> 
        
//         <Routes>
//             <Route path='/' element={<White/>}/>   
//             <Route path='/Red' element={<Red/>}/>
//             <Route path='/Pink' element={<Pink/>}/>
//             <Route path='/Green' element={<Green/>}/>
//             <Route path='/Blue' element={<Blue/>}/>
//         </Routes>
//         </>
//     )
// }
// export default App