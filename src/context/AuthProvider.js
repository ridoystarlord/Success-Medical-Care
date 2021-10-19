import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const allFirebaseContext = useFirebase();
  return (
    <Authcontext.Provider value={allFirebaseContext}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
