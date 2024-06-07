export type UserId = string;
export type User = {
  id: UserId;
  name: string;
  description: string;
};
type UsersState = {
  entities: Record<UserId, User | undefined>;
  ids: UserId[];
  selectedUserId: UserId | undefined;
};

export const initialUserList: User[] = Array.from(
  { length: 3000 },
  (_, index) => ({
    id: `user-${index + 1}`,
    name: `User ${index + 1}`,
    description: `Description for user ${index + 1}`,
  }),
);

export type UserSelectAction = {
  type: "USER_SELECT";
  payload: {
    userId: UserId;
  };
};

export type UserDeselectAction = {
  type: "USER_DESELECT";
};

export type UsersStoredAction = {
  type: "USER_STORED";
  payload: {
    users: User[];
  };
};

type Action = UserSelectAction | UserDeselectAction | UsersStoredAction;

const initialUsersState: UsersState = {
  entities: {},
  ids: [],
  selectedUserId: undefined,
};

export const usersReducer = (
  state = initialUsersState,
  action: Action,
): UsersState => {
  switch (action.type) {
    case "USER_STORED": {
      const { users } = action.payload;
      return {
        ...state,
        entities: users.reduce(
          (acc, user) => {
            acc[user.id] = user;
            return acc;
          },
          {} as Record<UserId, User>,
        ),
        ids: users.map((user) => user.id),
      };
    }
    case "USER_SELECT": {
      const { userId } = action.payload;
      return {
        ...state,
        selectedUserId: userId,
      };
    }
    case "USER_DESELECT": {
      return {
        ...state,
        selectedUserId: undefined,
      };
    }
    default:
      return state;
  }
};
