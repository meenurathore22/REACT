import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
  <h1>{seconds}</h1>
  )
}

export default Timer;




// Why use prev => prev + 1?
// setSeconds(prev => prev + 1);

// Always uses latest state value.