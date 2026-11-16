import React, { useState } from "react";

function ShopCart() {
  const [items, setItems] = useState(0);

  return (
    <>
      <h2>Cart Items: {items}</h2>

      <button onClick={() => setItems(items + 1)}>
        Add Item
      </button>

      <button onClick={() =>{if(items>0){ setItems(items - 1)}}}>
        Remove Item
      </button>
    </>
  );
}

export default ShopCart;