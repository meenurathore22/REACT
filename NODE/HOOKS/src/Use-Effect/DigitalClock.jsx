import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
},[]);

  return (
    <h1>{time.toLocaleTimeString()}</h1>
  );
}

export default DigitalClock;





// Explanation
// Component Loads
//       ↓
// setInterval Starts
//       ↓
// Every Second
//       ↓
// State Updates
//       ↓
// UI Re-renders
//       ↓
// Time Changes