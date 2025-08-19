import React, { useLayoutEffect, useState } from "react";

function UseLayoutEffectPage() {
  const [pos, setPos] = useState(0);

  useLayoutEffect(() => {
    function handleScroll() {
      setPos(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <h2>useLayoutEffect - Scroll Position</h2>
      <p>Scroll Position: {pos}px</p>
    </div>
  );
}
export default UseLayoutEffectPage;
