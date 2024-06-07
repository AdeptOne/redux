import {
  CounterId,
  decrementAction,
  incrementAction,
  selectCounter,
} from "./counters.slice.ts";
import { useAppDispatch, useAppSelector } from "../../store.ts";

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useAppDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId),
  );

  // const actions = bindActionCreators(
  //   {
  //     incrementAction,
  //     decrementAction,
  //   },
  //   dispatch,
  // );

  console.log("render counter", counterState);

  return (
    <div className="card">
      Count: {counterState?.counter}
      <button onClick={() => dispatch(incrementAction({ counterId }))}>
        increment
      </button>
      <button onClick={() => dispatch(decrementAction({ counterId }))}>
        decrement
      </button>
    </div>
  );
}
