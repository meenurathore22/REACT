import React, { useState, useEffect, useRef } from "react";

function StorePreviousValue() {
  const [count, setCount] = useState(0);

  // Stores previous count
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StorePreviousValue;