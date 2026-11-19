// import { useContext } from "react";
// import { NavbarContext } from "./Navbar";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, userLogin, userLogout } = useAppContext();
  if (!user) {
    return (
      <>
        <span>No logged in user</span>
        <button onClick={userLogin}>Login</button>
      </>
    );
  }

  if (user.name === null) {
    return (
      <>
        <span>No logged in user</span>
        <button onClick={userLogin}>Login</button>
      </>
    );
  }

  return (
    <>
      <span>Welcome, {user.name}</span>
      <button onClick={userLogout}>Logout</button>
    </>
  );
};

export default UserContainer;
