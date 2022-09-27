import axios from "axios";
import React from "react";
import "./UserList.scss";
import Skeleton from "./Skeleton";
import Users from "./Users.jsx";
import Success from "./Success";

function UserList({ items }) {
  const [users, setUsers] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then(({ data }) => {
        console.log(data);
        setUsers(data.data);
      })
      .catch((err) => {
        alert("Ошибка при получении пользователей");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(users);

  const filteredUsers = users.filter((user) => {
    let fullField = user.last_name + user.first_name + user.email;
    return fullField.toLowerCase().includes(input.toLowerCase());
  });
  console.log(users);

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id != id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSuccess = () => {
    setSuccess(true);
  };
  return (
    <div className="UserList">
      <>
        {!success && (
          <div className="search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              placeholder="Найти пользователя..."
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </div>
        )}
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <ul className="users-list">
            {success ? (
              <Success count={invites.length} />
            ) : (
              <>
                {filteredUsers.map((obj) => (
                  <Users
                    invites={invites}
                    onClickInvite={onClickInvite}
                    isInvited={invites.includes(obj.id)}
                    userData={obj}
                    key={obj.id}
                  />
                ))}
              </>
            )}
          </ul>
        )}
        {!success && (
          <button
            onClick={onClickSuccess}
            disabled={invites.length > 0 ? "" : "disabled"}
            className="send-invite-btn"
          >
            Отправить приглашение
          </button>
        )}
      </>
    </div>
  );
}

export default UserList;
