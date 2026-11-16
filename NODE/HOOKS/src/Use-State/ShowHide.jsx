import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default ShowHide;