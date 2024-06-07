import {CounterId, DecrementAction, IncrementAction, selectCounter} from "./counters.slice.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useAppDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );

  console.log("render counter", counterState);

  return <div className="card">
    Count: {counterState?.counter}
    <button
      onClick={() =>
        dispatch({type: "INCREMENT", payload: { counterId }} satisfies IncrementAction)
      }
    >
      increment
    </button>
    <button
      onClick={() =>
        dispatch({type: "DECREMENT", payload: { counterId }} satisfies DecrementAction)
      }
    >
      decrement
    </button>
  </div>
}