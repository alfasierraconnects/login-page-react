import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => setLoading(false), []);

  const loginUser = (userInfo) => {};
  const logoutUser = () => {
    setUser(false);
  };
  const registerUser = (userInfo) => {};
  const checkUserStatus = () => {};

  const contextValue = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <p>Loading...</p> : props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
