import React, { useState, useEffect } from "react";

function ChangeDocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default ChangeDocumentTitle;




// Explanation
// Initial count = 0
//        ↓
// useEffect runs
//        ↓
// Title = Count: 0

// Click Button
//        ↓
// count changes
//        ↓
// useEffect runs again
//        ↓
// Title updated