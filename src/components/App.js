import React, { useState } from "react";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);


  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      {/* Render items list here */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
