import { createContext, useContext, useState } from "react"

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const register = async (username, email, password) => {

    const res = await fetch('https://fakestoreapi.com/users', { method: 'POST', body: JSON.stringify({ username, email, password }) });
    if (res.ok) {
      setUser(true);
      return user
    }

  }

  const login = async (username, password) => {

    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });


    if (response.ok) {
      const token = await response.json();
      setUser(true);
      return token
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ login, logout, user, register }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }
