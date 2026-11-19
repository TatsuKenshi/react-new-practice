import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ display: "flex", marginRight: "2rem" }}>
        <li style={{ paddingRight: "1rem" }}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};

export default NavLinks;
