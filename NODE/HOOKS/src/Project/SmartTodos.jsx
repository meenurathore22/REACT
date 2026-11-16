import React, { useState, useEffect, useRef } from "react";

function SmartTodos() {
 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const prevTodosCount = useRef();

  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    prevTodosCount.current = todos.length;
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  
  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Todo App</h1>

      
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />

      <button onClick={addTodo}>Add</button>

      <h3>Total Todos: {todos.length}</h3>
      <h4>Previous Count: {prevTodosCount.current}</h4>

      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SmartTodos;