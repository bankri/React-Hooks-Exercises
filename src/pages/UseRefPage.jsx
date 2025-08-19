import React, { useRef, useEffect } from "react";

function UseRefPage() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>useRef - Auto Focus Input</h2>
      <input ref={inputRef} placeholder="Auto focus here..." />
    </div>
  );
}
export default UseRefPage;
