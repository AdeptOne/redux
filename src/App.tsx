import { useEffect, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DecrementAction, IncrementAction, store } from "./store.ts";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    return store.subscribe(() => {
      forceUpdate();
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        Count: {store.getState().counter}
        <button
          onClick={() =>
            store.dispatch({ type: "INCREMENT" } satisfies IncrementAction)
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            store.dispatch({ type: "DECREMENT" } satisfies DecrementAction)
          }
        >
          decrement
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
