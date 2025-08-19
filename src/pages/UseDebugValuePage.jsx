import React, { useDebugValue, useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useDebugValue(value);

  return [value, setValue];
}

function UseDebugValuePage() {
  const [data, setData] = useLocalStorage("myData", "");

  return (
    <div>
      <h2>useDebugValue - LocalStorage</h2>
      <input value={data} onChange={e => setData(e.target.value)} />
      <p>Stored Value: {data}</p>
    </div>
  );
}
export default UseDebugValuePage;
