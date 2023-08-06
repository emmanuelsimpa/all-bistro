import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthenticationContext = createContext();

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

export const AuthenticationContextProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    // if (email || password) {
    //   isValidEmail(email) === false
    //     ? setError("Email is not valid")
    //     : password.length === null
    //     ? setError("Password should be more than 4")
    //     : "";
    //   return;
    // }

    // if (isValidEmail(email) === true && password.length > 4) {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
  };

  const onRegister = (email, password) => {
    setIsLoading(true);
    // if (isValidEmail(email) === true && password.length > 4) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
    //   return;
    // }
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
