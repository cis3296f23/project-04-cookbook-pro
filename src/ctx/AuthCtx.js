import {useContext, createContext, useEffect, useState} from "react";
import {GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged, getAuth} from 'firebase/auth';
import firebaseApp from "../firebase/firebase";

//THIS FILE IS NOT BEING USED YET.

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const auth = getAuth(firebaseApp);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    const logOut = () =>{
        signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User Email:', user.email)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return(
        <AuthContext.Provider value = {{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext)
}