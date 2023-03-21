import React, { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    // onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    })

    return (
        <UserContext.Provider value={{createUser, user, signIn, logout}}>
            {children}
        </UserContext.Provider>
    )
}  

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const UserAuth = () => {
    return useContext(UserContext);
}