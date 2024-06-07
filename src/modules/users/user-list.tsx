import {memo, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {UserDeselectAction, UserId, UserSelectAction} from "./users.slice.ts";

export function UserList() {
  const [sortType, setSortType] = useState<"asc" | "desc">("asc")

  const ids = useAppSelector(state => state.users.ids);
  const entities = useAppSelector(state => state.users.entities);
  const selectedUserId = useAppSelector(state => state.users.selectedUserId);

  const sortedUsers = useMemo(() => ids
    .map(id => entities[id])
    .sort((a, b) => {
      switch (sortType) {
        case "asc":
          return a!.name.localeCompare(b!.name);
        case "desc":
          return b!.name.localeCompare(a!.name);
      }
    }), [ids, entities, sortType]);

  return (
    <div className="flex flex-col items-center">
      {!selectedUserId ? (
        <>
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-row items-center">
              <button onClick={() => setSortType('asc')}>Asc</button>
              <button onClick={() => setSortType('desc')}>Desc</button>
            </div>
          </div>
          <ul className="flex flex-col">
            {sortedUsers.map((user) => (<UserListItem key={user!.id} userId={user!.id}/>))}
          </ul>
        </>
      ) : (
        <SelectedUser userId={selectedUserId} />
      )}
    </div>)
}

const UserListItem = memo(function UserListItem({ userId }: { userId: UserId }) {
  const user = useAppSelector(state => state.users.entities[userId]);
  const dispatch = useAppDispatch();

  const handleUserClick = () => {
    dispatch({
      type: "USER_SELECT",
      payload: { userId: user!.id }
    } satisfies UserSelectAction)
  };

  return (
    <li key={user!.id} className="user-list__item" onClick={handleUserClick}>
      <span className="user-list__item-description">{user!.description}</span>
    </li>
  );
});

function SelectedUser({ userId }: { userId: UserId }) {
  const user = useAppSelector(state => state.users.entities[userId]);

  const dispatch = useAppDispatch();
  const handleDeselectUserClick = () => {
    dispatch({
      type: "USER_DESELECT"
    } satisfies UserDeselectAction);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleDeselectUserClick}>
        Back
      </button>
      <h2 className="text-3xl">{user!.name}</h2>
      <p className="text-xl">{user!.description}</p>
    </div>
  )
}

