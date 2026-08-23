import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userLogin = () => {
    setUser({ name: "Mike" });
  };

  const userLogout = () => {
    setUser(null);
  };

  return (
    <main>
      {!user ? (
        <div>
          <h4>Please Log in</h4>
          <button onClick={userLogin}>Log in</button>
        </div>
      ) : (
        <div>
          <h4>Welcome {user.name}</h4>
          <button onClick={userLogout}>Log out</button>
        </div>
      )}
    </main>
  );
};

export default UserChallenge;
