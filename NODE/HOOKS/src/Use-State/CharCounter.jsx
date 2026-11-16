import React, { useState } from "react";

function CharCounter() {
  const [text, setText] = useState("");

  return (
    <>
      <textarea

      
        rows="5"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Characters: {text.length}</h3>
    </>
  );
}

export default CharCounter;