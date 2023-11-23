import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // social login(google)
    const googleProvider = new GoogleAuthProvider()

    // createUser
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // social login(google)
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // signIn
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // signOut
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update user profile
    const updateUserProfile = (name,photo)=>{
        setLoading(true)
         return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
        //   .then(() => {
        //     // Profile updated!
        //     // ...
        //   }).catch((error) => {
        //     // An error occurred
        //     // ...
        //   });
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('currentUser', currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;