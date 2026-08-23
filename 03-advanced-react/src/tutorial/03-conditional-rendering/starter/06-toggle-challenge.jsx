import { useState } from "react";

const ToggleChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const userLogin = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setUser("007");
      return;
    }
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUser("");
    }
  };

  return (
    <div>
      <h1>MI6</h1>
      {isLoggedIn ? <UserDisplay user={user} /> : <h2>Please Log In</h2>}
      <button onClick={userLogin}>{user ? "Log out" : "Log in"}</button>
    </div>
  );
};

const UserDisplay = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user}</h2>
    </div>
  );
};

export default ToggleChallenge;
