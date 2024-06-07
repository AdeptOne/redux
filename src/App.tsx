import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {Counter} from "./modules/counters/counters.tsx";
import {UserList} from "./modules/users/user-list.tsx";

function App() {
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
      <div className="flex flex-row">
        <Counter counterId="first" />
        <Counter counterId="second" />
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserList />
    </>
  );
}

// export function ClearReduxCounter({ counterId }: { counterId: CounterId }) {
//   const [, forceUpdate] = useReducer((x) => x + 1, 0);
//   const lastStateRef = useRef<ReturnType<typeof selectCounter>>();
//
//   useEffect(() => {
//     return store.subscribe(() => {
//       const currentState = selectCounter(store.getState(), counterId);
//       const lastState = lastStateRef.current;
//
//       if (currentState !== lastState) {
//         forceUpdate();
//       }
//
//       lastStateRef.current = currentState;
//     });
//   }, []);
//
//   const counterState = selectCounter(store.getState(), counterId);
//
//   return <div className="card">
//     Count: {counterState?.counter}
//     <button
//       onClick={() =>
//         store.dispatch({type: "INCREMENT", payload: { counterId }} satisfies IncrementAction)
//       }
//     >
//       increment
//     </button>
//     <button
//       onClick={() =>
//         store.dispatch({type: "DECREMENT", payload: { counterId }} satisfies DecrementAction)
//       }
//     >
//       decrement
//     </button>
//   </div>
// }

export default App;
