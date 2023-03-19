import { React, createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // signOut,
    // onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <UserContext.Provider value={createUser}>
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