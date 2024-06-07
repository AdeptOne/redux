import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, useStore} from "react-redux";
import {initialUserList, usersReducer, UsersStoredAction} from "./modules/users/users.slice.ts";
import {countersReducer} from "./modules/counters/counters.slice.ts";


// type oldState = {
//   counters: CountersState;
//   users: UsersState
// };

// const oldInitialState: State = {
//   counters: {},
//   users: initialUsersState,
// };

// const oldReducer = (state = initialState, action: Action): State => {
//   return {
//     users: usersReducer(state.users, action),
//     counters: countersReducer(state.counters, action),
//   }
// };

const reducer = combineReducers({
  users: usersReducer,
  counters: countersReducer,
});

export const store = configureStore({
  reducer: reducer,
});

store.dispatch({ type: "USER_STORED", payload: { users: initialUserList } } satisfies UsersStoredAction);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();