import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userLoginFunction = () => {
    setUser({ name: "Mike" });
  };

  const userLogoutFunction = () => {
    setUser(null);
  };

  return (
    <main>
      {!user ? (
        <div>
          <h4>Please Log in</h4>
          <button onClick={userLoginFunction}>Log in</button>
        </div>
      ) : (
        <div>
          <h4>Welcome {user.name}</h4>
          <button onClick={userLogoutFunction}>Log out</button>
        </div>
      )}
    </main>
  );
};

export default UserChallenge;
