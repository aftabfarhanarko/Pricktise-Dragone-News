// src/context/AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const creatUserFun = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signUserFun = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const upDeatProfiles = (profile) => {
    setLoding(true)
    return updateProfile(auth.currentUser, profile);
  };
  const enailVeryfyFun = () => {
    setLoding(true)
    return sendEmailVerification(auth.currentUser);
  };

  const passwordReset = (email) => {
    setLoding(true)
    return sendPasswordResetEmail(auth, email);
  }

  const signOutUser = () => {
    return signOut(auth);
  }

  const userinfoData = {
    creatUserFun,
    signUserFun,
    upDeatProfiles,
    enailVeryfyFun,
    passwordReset,
    user,
    loding,
    signOutUser
  };

  useEffect(() => {
    const unsubcripet = onAuthStateChanged(auth , (currentUser) => {
    setUser(currentUser);
    setLoding(false)
    })

    return () => {
      unsubcripet();
    }
  },[])
  return (
    <AuthContext.Provider value={userinfoData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
