import React, { useState } from "react";

function LightDarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        // color: dark
        //  ? "white" : "black",
        height: "100vh",
      }}>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 style={{
      color:  dark ? "white" : "black"
      }}>React Dark Mode</h1>
    </div>
  );
}

export default LightDarkMode;