// src/context/AuthContext.jsx
import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

// Context তৈরি করো
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // নতুন ইউজার তৈরি
  const creatUserFun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // লগইন ইউজার
  const signUserFun = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const upDeatProfiles = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }
  const emailveriFy = () => {
    return sendEmailVerification(auth.currentUser);
  }

  // Context data
  const userinfoData = {
    creatUserFun,
    signUserFun,
    upDeatProfiles,
    emailveriFy,
    name: "Farhen",
  };

  return (
    <AuthContext.Provider value={userinfoData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
