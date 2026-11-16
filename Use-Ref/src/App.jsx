import { useState, useEffect, useRef } from 'react';
import './App.css';

function App (){
  const[count,setCount]=useState(0)
  const[isCounting,setCounting]=useState(false)

  const intervalRef = useRef(null)

  useEffect(()=>{
    if(isCounting){
      intervalRef.current=setInterval(()=>{
        setCount((preCount)=>preCount+1)
      },500)
    }
    else if (!isCounting&&intervalRef.current){
      clearInterval(intervalRef.current)
      intervalRef.current(null)
    }

    return ()=>{
      if(intervalRef.current){
        clearInterval(intervalRef.current)
        intervalRef.current=null
        
      }
    }
  
  },[isCounting])

  
  function StartCounting(){
    setCounting(true)
  }
  
  function StopCounting(){
    setCounting(false)
  }

  return(
    <>
    <h1>{count}</h1>
    <button onClick={StartCounting}>start</button>
    <button onClick={StopCounting}>stop</button>
    
    </>
  )
}
export default App














// import { useState, useEffect } from 'react';
// import './App.css';
// import First from './First';
  
//   function App() {
//     const [count, setCount] = useState(0);
//     const [myData, setMyData] = useState('Me Data Hu');
//     const [button ,setButton] = useState(false)
  
//     useEffect(() => {
//       setCount(count+1)
//     },);
  
    
//     const handleStart = (e) => {
//       setCount(True);
//     };
    
//     const handleStop = (e) => {
//       setCount(False);
//     };
//     return (
//       <>
//         <button value={myData} onClick={handleStart}>Start</button>
//         <button value={myData} onClick={handleStop}>Stop</button>
//         <h1>{myData}</h1> 
//        <p>Render {count} Times</p>
      
//       </>
//     );
//   }
  
//   export default App;




// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [myData, setMyData] = useState('Me Data Hu');
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (running) {
//       interval = setInterval(() => {
//         setCount(prevCount => prevCount + 1);
//       }); // Increment every second
//     }

//     return () => clearInterval(interval); // Cleanup interval on stop
//   }, [running]);

//   const handleStart = () => {
//     setRunning(true);
//   };

//   const handleStop = () => {
//     setRunning(false);
//   };

//   return (
//     <>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <h1>{myData}</h1>
//       <p>Render {count} Times</p>
//     </>
//   );
// }

// export default App;