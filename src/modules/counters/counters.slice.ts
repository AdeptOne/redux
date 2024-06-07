import {AppState} from "../../store.ts";

export type CounterId = string;
type CounterState = {
  counter: number;
}
type CountersState =  Record<CounterId, CounterState | undefined>;

export type IncrementAction = {
  type: "INCREMENT";
  payload: {
    counterId: CounterId;
  };
};

export type DecrementAction = {
  type: "DECREMENT";
  payload: {
    counterId: CounterId;
  };
};

type Action = IncrementAction | DecrementAction;

const initialCounterState: CounterState = { counter: 0 };

const initialCountersState: CountersState = {};

export const countersReducer = (state = initialCountersState, action: Action): CountersState => {
  switch (action.type) {
    case "INCREMENT": {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;

      if (currentCounter.counter >= 0) {
        return {
          ...state,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter + 1
          }
        };
      }
      return state;
    }
    case "DECREMENT": {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;
      if (currentCounter.counter > 0) {
        return {
          ...state,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter - 1
          }
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];
