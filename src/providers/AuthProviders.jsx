import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext(null)

export const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const[user,setUser]=useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // const user ={displayName: 'sagor nodi'}

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;