import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';  

function ItemForm({ onItemFormSubmit }) {
  
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");


  function handleSubmit(event) {
    event.preventDefault(); 

  
    const newItem = {
      id: uuidv4(), 
      name: itemName,
      category: itemCategory,
    };

 
    onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={itemName} 
        onChange={(e) => setItemName(e.target.value)} 
        placeholder="Item Name" 
        required 
      />
      <select 
        value={itemCategory} 
        onChange={(e) => setItemCategory(e.target.value)} 
        required
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        {/* Add other categories here */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
