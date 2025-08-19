import React, { useImperativeHandle, forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  return <input ref={inputRef} {...props} />;
});

function UseImperativeHandlePage() {
  const inputRef = useRef();
  return (
    <div>
      <h2>useImperativeHandle - Custom Input</h2>
      <CustomInput ref={inputRef} placeholder="Click button to focus" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
export default UseImperativeHandlePage;
