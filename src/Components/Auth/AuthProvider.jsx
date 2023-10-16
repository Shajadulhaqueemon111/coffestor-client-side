import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebaseconfig";
const auth = getAuth(app);
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState([])
const[loading,setLoading]=useState(true)
const creatUser=(email,password)=>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
}

const userSingIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
    const userInfo={
 user,
 creatUser,
 loading,
 userSingIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;