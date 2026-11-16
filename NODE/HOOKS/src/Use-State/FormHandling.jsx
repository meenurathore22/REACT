import React, { useState } from "react";

//for Single input
function FormHandling() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Name: {name}</h2>
    </>
  );
}

export default FormHandling;



// //For multiple input

// import React, { useState } from "react";

// function FormHandling() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//       />

//       <h3>{user.name}</h3>
//       <h3>{user.email}</h3>
//     </>
//   );
// }

// export default FormHandling;