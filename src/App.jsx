import React, { useState } from "react";
import UseStatePage from "./pages/UseStatePage.jsx";
import UseEffectPage from "./pages/UseEffectPage.jsx";
import UseRefPage from "./pages/UseRefPage.jsx";
import UseMemoPage from "./pages/UseMemoPage.jsx";
import UseCallbackPage from "./pages/UseCallbackPage.jsx";
import UseReducerPage from "./pages/UseReducerPage.jsx";
import UseContextPage from "./pages/UseContextPage.jsx";
import UseLayoutEffectPage from "./pages/UseLayoutEffectPage.jsx";
import UseImperativeHandlePage from "./pages/UseImperativeHandlePage.jsx";
import UseDebugValuePage from "./pages/UseDebugValuePage.jsx";

const pages = [
  { name: "useState", component: <UseStatePage /> },
  { name: "useEffect", component: <UseEffectPage /> },
  { name: "useRef", component: <UseRefPage /> },
  { name: "useMemo", component: <UseMemoPage /> },
  { name: "useCallback", component: <UseCallbackPage /> },
  { name: "useReducer", component: <UseReducerPage /> },
  { name: "useContext", component: <UseContextPage /> },
  { name: "useLayoutEffect", component: <UseLayoutEffectPage /> },
  { name: "useImperativeHandle", component: <UseImperativeHandlePage /> },
  { name: "useDebugValue", component: <UseDebugValuePage /> },
];

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Hooks Exercises</h1>
      <div>
        {pages.map((p, i) => (
          <button key={i} onClick={() => setPageIndex(i)} style={{ margin: "5px" }}>
            {p.name}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc" }}>
        {pages[pageIndex].component}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPageIndex((pageIndex - 1 + pages.length) % pages.length)}
        >
          Previous
        </button>
        <button
          onClick={() => setPageIndex((pageIndex + 1) % pages.length)}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
