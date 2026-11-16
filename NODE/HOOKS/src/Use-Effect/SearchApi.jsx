import React, { useState, useEffect } from "react";

function SearchApi() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const filteredUsers = data.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );

        setUsers(filteredUsers);
      });
  }, [query]);

  return (
    <>
      <h2>Search User</h2>

      <input
        type="text"
        placeholder="Enter name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default SearchApi;





// Flow
// User Types
//       ↓
// query Changes
//       ↓
// useEffect Runs
//       ↓
// API Called
//       ↓
// Results Shown