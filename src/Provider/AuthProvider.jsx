import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState({})


    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

   // Create user & sign up
   const createUser = (email , password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   }

// sign in

const signIn = (email , password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

//sign Out 
const logOut = () => {
    return signOut(auth)
}

//get user && observer

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
       setUser(user)
      });
},[])

console.log(user)

    const authentications = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;