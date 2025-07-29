import { createContext, useContext, useState } from "react";

// Crear contexto
const UserContext = createContext();

// Provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(true);
  }
  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

export { UserProvider };
