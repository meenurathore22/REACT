import React, { useState } from "react";

function ToggleButton() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <h2>{status ? "ON" : "OFF"}</h2>

      <button onClick={() => setStatus(!status)}>
        Toggle
      </button>
    </>
  );
}

export default ToggleButton;