import { configureStore } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

export type IncrementAction = {
  type: "INCREMENT";
};

export type DecrementAction = {
  type: "DECREMENT";
};

type Action = IncrementAction | DecrementAction;

const initialState: State = {
  counter: 0,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
