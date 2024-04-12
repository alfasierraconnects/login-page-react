import { useContext, createContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => setLoading(false), []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      console.log(accountDetails);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = () => {
    setUser(null);
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
