import { AppState } from "../../store.ts";
import { createAction, createReducer } from "@reduxjs/toolkit";

export type CounterId = string;
type CounterState = {
  counter: number;
};

type CountersState = Record<CounterId, CounterState | undefined>;

const initialCounterState: CounterState = { counter: 0 };

const initialCountersState: CountersState = {};

export const incrementAction = createAction<{
  counterId: CounterId;
}>("counters/increment");

export const decrementAction = createAction<{
  counterId: CounterId;
}>("counters/decrement");

export const countersReducer = createReducer(
  initialCountersState,
  (builder) => {
    builder.addCase(incrementAction, (state, { payload: { counterId } }) => {
      if (!state[counterId]) {
        state[counterId] = initialCounterState;
      }

      state[counterId]!.counter++;
    }),
      builder.addCase(decrementAction, (state, { payload: { counterId } }) => {
        if (!state[counterId]) {
          state[counterId] = initialCounterState;
        }

        state[counterId]!.counter--;
      });
  },
);

// export type IncrementAction = {
//   type: "INCREMENT";
//   payload: {
//     counterId: CounterId;
//   };
// };

// export type DecrementAction = {
//   type: "DECREMENT";
//   payload: {
//     counterId: CounterId;
//   };
// };

// type Action = IncrementAction | DecrementAction;

// export const countersReducer = (
//   state = initialCountersState,
//   action: Action,
// ): CountersState => {
//   switch (action.type) {
//     case "INCREMENT": {
//       const { counterId } = action.payload;
//       const currentCounter = state[counterId] ?? initialCounterState;

//       if (currentCounter.counter >= 0) {
//         return {
//           ...state,
//           [counterId]: {
//             ...currentCounter,
//             counter: currentCounter.counter + 1,
//           },
//         };
//       }
//       return state;
//     }
//     case "DECREMENT": {
//       const { counterId } = action.payload;
//       const currentCounter = state[counterId] ?? initialCounterState;
//       if (currentCounter.counter > 0) {
//         return {
//           ...state,
//           [counterId]: {
//             ...currentCounter,
//             counter: currentCounter.counter - 1,
//           },
//         };
//       }
//       return state;
//     }
//     default:
//       return state;
//   }
// };

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];
