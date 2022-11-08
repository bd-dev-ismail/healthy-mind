import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const provider = new GoogleAuthProvider();
    //register
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password );
    }
    //login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update
    const updateData = (profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    //Google
    const withGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //logout
    const logOutUser = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    
    //observer
    useEffect(()=> {
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=> {
            
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubcribe();
    },[])
    const authInfo = {
      user,
      loading,
      registerUser,
      loginUser,
      withGoogle,
      logOutUser,
      updateData,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;