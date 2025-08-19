import React, { useState } from "react";

function UseStatePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>useState - Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
export default UseStatePage;
