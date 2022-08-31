import { useState, createContext, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/Firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    

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