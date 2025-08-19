import React, { useState, useCallback } from "react";

function UseCallbackPage() {
  const [items, setItems] = useState([]);
  const addItem = useCallback(() => {
    setItems(prev => [...prev, "Item " + (prev.length + 1)]);
  }, []);

  return (
    <div>
      <h2>useCallback - Add Items</h2>
      <button onClick={addItem}>Tambah Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseCallbackPage;
