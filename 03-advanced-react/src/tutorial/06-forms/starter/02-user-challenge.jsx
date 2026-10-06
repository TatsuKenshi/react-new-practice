import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: users.length + 1, name: name };
    const newListOfUsers = [...users, newUser];
    setUsers(newListOfUsers);
  };
  const removeUser = (id) => {
    const newListOfUsers = users.filter((user) => user.id !== id);
    setUsers(newListOfUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <button
              type="button"
              className="btn"
              onClick={() => {
                removeUser(user.id);
              }}
            >
              remove user
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;

// setup controlled input for name
// setup onSubmit function placeholder
// import data array from the data file
// create another state with data as default
// iterate over data and display it below the form
// when user submits the form, add new person to the list
// add button and function to delete the new user
