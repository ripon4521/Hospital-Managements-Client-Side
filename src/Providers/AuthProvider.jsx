import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);


    const createUser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser)
       
           setloading(false)
        })
        return()=>{
             unsubscribe()
        } 
    },[])




    const userInfo = {
        user,
        loading,
        createUser
        
    }
    
    return (

              <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
     
    );
};

export default AuthProvider;