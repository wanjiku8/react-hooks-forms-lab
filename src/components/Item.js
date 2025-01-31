import React from "react";
import { v4 as uuidv4 } from 'uuid';  
function Item({ name, category }) {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  );
}

export default Item;
