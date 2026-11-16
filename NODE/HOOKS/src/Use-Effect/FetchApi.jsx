import React, { useState, useEffect } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Data:", data);
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    console.log("Users State:", users);
  }, [users]);

  return (
    <ol>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
}

export default FetchApi;




// Flow
// Component Mount
//       ↓
// API Call
//       ↓
// Response Received
//       ↓
// State Updated
//       ↓
// Data Displayed