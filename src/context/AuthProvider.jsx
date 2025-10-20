// src/context/AuthContext.jsx
import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
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
  };
  const enailVeryfyFun = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // Context data
  const userinfoData = {
    creatUserFun,
    signUserFun,
    upDeatProfiles,
    enailVeryfyFun,
    passwordReset
  };

  return (
    <AuthContext.Provider value={userinfoData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
