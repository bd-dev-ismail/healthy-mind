import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    //register
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password );
    }
    //login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Google
    const withGoogle = ()=> {
        return signInWithPopup(auth, provider);
    }
    //logout
    const logOutUser = ()=> {
        return signOut(auth);
    }
    //observer
    useEffect(()=> {
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })
        return ()=> unsubcribe();
    },[])
    const authInfo = { user, registerUser, loginUser, withGoogle, logOutUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;