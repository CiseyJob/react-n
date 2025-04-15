
import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="app-container">
      <h2>Dynamic List Manager</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>
      <div className="list-container">
        <ul>
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
