import {createContext, useEffect, useReducer } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/Firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const UserReducer = (state, action) => {
    console.log('dispatched');
    const {type, payload} = action;
    console.log({action})
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled ${type} type`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}


export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)

    const {currentUser} = state;
    console.log("currentuser", currentUser)
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }


    const value = {currentUser, setCurrentUser}


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log('Actualuserfrom onauth state changedlistener', user)
            if(user){
                createUserDocFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};


export default UserReducer;
