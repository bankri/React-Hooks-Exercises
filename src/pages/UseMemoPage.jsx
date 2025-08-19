import React, { useMemo, useState } from "react";

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

function UseMemoPage() {
  const [num, setNum] = useState(5);
  const fact = useMemo(() => factorial(num), [num]);

  return (
    <div>
      <h2>useMemo - Factorial</h2>
      <input
        type="number"
        value={num}
        onChange={e => setNum(Number(e.target.value))}
      />
      <p>Factorial: {fact}</p>
    </div>
  );
}
export default UseMemoPage;
