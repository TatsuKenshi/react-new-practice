import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom hook one-liner
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: null });

  const userLogin = () => {
    setUser({ name: "Peter" });
  };

  const userLogout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, userLogin, userLogout }}>
      <nav style={{ display: "flex" }}>
        <div style={{ fontWeight: "800", marginRight: "2rem" }}>
          CONTEXT API
        </div>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
