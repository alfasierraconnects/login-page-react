import { Children, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const contextValue = {};

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
