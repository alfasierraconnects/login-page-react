import { useContext, createContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
    // eslint-disable-next-line
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      // eslint-disable-next-line
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      // console.log(accountDetails);
      setUser(accountDetails);
      // console.log(response);
    } catch (error) {
      console.error(error);
      navigate("/error", { state: { message: error.message } });
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      // eslint-disable-next-line
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/error", { state: { message: error.message } });
    }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    setLoading(true);
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      // console.log(error);
    }
    setLoading(false);
  };

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
